import { NextResponse } from "next/server";
import { MongoClient, ObjectId } from "mongodb";

const DB_NAME = "Xtt";
const MAP = {
  courses: "Jvbyzlz", // Caesar +7
  tutors: "ababyz",
};

const g = globalThis;
g.__mongo = g.__mongo ?? { client: null, promise: null };

async function getClient() {
  const uri = process.env.ConnectionStringToDb;
  if (!uri) throw new Error("Missing ConnectionStringToDb in .env");

  if (!g.__mongo.client) {
    if (!g.__mongo.promise) {
      const client = new MongoClient(uri);
      g.__mongo.promise = client.connect().then(() => client);
    }
    g.__mongo.client = await g.__mongo.promise;
  }
  return g.__mongo.client;
}

async function getCollection(resource) {
  const colName = MAP[resource];
  if (!colName) throw new Error("Invalid resource. Use ?resource=courses or ?resource=tutors");
  const client = await getClient();
  return client.db(DB_NAME).collection(colName);
}

function json(data, status = 200) {
  return NextResponse.json(data, { status });
}

function pick(obj, allowed) {
  const out = {};
  for (const k of allowed) if (obj?.[k] !== undefined) out[k] = obj[k];
  return out;
}

// very simple schema (you can tighten later)
function validateCreate(resource, body) {
  if (!body || typeof body !== "object") throw new Error("Invalid JSON body");

  if (resource === "courses") {
    if (!body.title || !body.desc) throw new Error("courses: title + desc are required");
    return {
      title: String(body.title),
      desc: String(body.desc),
      category: body.category ? String(body.category) : "Design",
      price: body.price ?? null,
      imageUrl: body.imageUrl ?? null,
      tutorId: body.tutorId ?? null,
      tags: Array.isArray(body.tags) ? body.tags : [],
    };
  }

  if (resource === "tutors") {
    if (!body.name || !body.info) throw new Error("tutors: name + info are required");
    return {
      name: String(body.name),
      info: String(body.info),
      avatarUrl: body.avatarUrl ?? null,
      role: body.role ?? null,
      rating: body.rating ?? null,
    };
  }

  throw new Error("Invalid resource");
}

function validatePatch(resource, body) {
  if (!body || typeof body !== "object") throw new Error("Invalid JSON body");
  delete body._id;

  if (resource === "courses") {
    return pick(body, ["title", "desc", "category", "price", "imageUrl", "tutorId", "tags"]);
  }
  if (resource === "tutors") {
    return pick(body, ["name", "info", "avatarUrl", "role", "rating"]);
  }
  throw new Error("Invalid resource");
}

/**
 * Endpoint:
 * /api/.../dashboard?resource=courses&id=...
 */

// GET: list or single
export async function GET(req) {
  try {
    const url = new URL(req.url);
    const resource = url.searchParams.get("resource");
    const id = url.searchParams.get("id");

    const col = await getCollection(resource);

    if (id) {
      if (!ObjectId.isValid(id)) return json({ ok: false, error: "Invalid id" }, 400);
      const item = await col.findOne({ _id: new ObjectId(id) });
      if (!item) return json({ ok: false, error: "Not found" }, 404);
      return json({ ok: true, item });
    }

    const limit = Math.min(parseInt(url.searchParams.get("limit") || "20", 10), 100);
    const skip = Math.max(parseInt(url.searchParams.get("skip") || "0", 10), 0);

    const items = await col.find({}).sort({ _id: -1 }).skip(skip).limit(limit).toArray();
    return json({ ok: true, items, page: { skip, limit } });
  } catch (e) {
    return json({ ok: false, error: e.message }, 400);
  }
}

// POST: create
export async function POST(req) {
  try {
    const url = new URL(req.url);
    const resource = url.searchParams.get("resource");
    const body = await req.json();

    const col = await getCollection(resource);
    const clean = validateCreate(resource, body);

    const now = new Date();
    const doc = { ...clean, createdAt: now, updatedAt: now };

    const r = await col.insertOne(doc);
    const item = await col.findOne({ _id: r.insertedId });

    return json({ ok: true, item }, 201);
  } catch (e) {
    return json({ ok: false, error: e.message }, 400);
  }
}

// PATCH: update by id in query
export async function PATCH(req) {
  try {
    const url = new URL(req.url);
    const resource = url.searchParams.get("resource");
    const id = url.searchParams.get("id");

    if (!id || !ObjectId.isValid(id)) {
      return json({ ok: false, error: "Put id in query: ?id=..." }, 400);
    }

    const body = await req.json();
    const clean = validatePatch(resource, body);
    if (Object.keys(clean).length === 0) return json({ ok: false, error: "No valid fields to update" }, 400);

    const col = await getCollection(resource);

    const updated = await col.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: { ...clean, updatedAt: new Date() } },
      { returnDocument: "after" }
    );

    if (!updated.value) return json({ ok: false, error: "Not found" }, 404);
    return json({ ok: true, item: updated.value });
  } catch (e) {
    return json({ ok: false, error: e.message }, 400);
  }
}

// DELETE: delete by id in query
export async function DELETE(req) {
  try {
    const url = new URL(req.url);
    const resource = url.searchParams.get("resource");
    const id = url.searchParams.get("id");

    if (!id || !ObjectId.isValid(id)) {
      return json({ ok: false, error: "Put id in query: ?id=..." }, 400);
    }

    const col = await getCollection(resource);
    const r = await col.deleteOne({ _id: new ObjectId(id) });

    if (r.deletedCount === 0) return json({ ok: false, error: "Not found" }, 404);
    return json({ ok: true });
  } catch (e) {
    return json({ ok: false, error: e.message }, 400);
  }
}
