"use client";

import React, { useMemo, useState } from "react";
import SectionCard from "./SectionCard";
import Modal from "./Modal";

function uid() {
  return Math.random().toString(16).slice(2) + Date.now().toString(16);
}

export default function CourseManager() {
  const [courses, setCourses] = useState(() => [
    {
      id: uid(),
      title: "German B2 Prep",
      summary: "Reading + listening drills",
      price: 49,
      status: "active",
      notes: "Placeholder fields until client decides",
    },
    {
      id: uid(),
      title: "Laravel Bootcamp",
      summary: "From zero to deployment",
      price: 99,
      status: "draft",
      notes: "Add modules later",
    },
  ]);

  const [query, setQuery] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return courses;
    return courses.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        (c.summary || "").toLowerCase().includes(q) ||
        (c.status || "").toLowerCase().includes(q)
    );
  }, [courses, query]);

  function openCreate() {
    setEditing({
      id: null,
      title: "",
      summary: "",
      price: 0,
      status: "draft",
      notes: "",
    });
    setModalOpen(true);
  }

  function openEdit(course) {
    setEditing({ ...course });
    setModalOpen(true);
  }

  function remove(id) {
    setCourses((prev) => prev.filter((c) => c.id !== id));
  }

  function save() {
    // Later: replace with API call.
    // Example: await fetch("/api/courses", { method: editing.id ? "PUT" : "POST", body: JSON.stringify(editing) })

    if (!editing.title.trim()) return;

    setCourses((prev) => {
      if (editing.id) {
        return prev.map((c) => (c.id === editing.id ? { ...editing } : c));
      }
      return [{ ...editing, id: uid() }, ...prev];
    });

    setModalOpen(false);
  }

  return (
    <>
      <SectionCard
        title="Courses"
        subtitle="Add, delete, modify courses (schema can evolve later)"
        right={
          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search courses..."
                className="w-56 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-4 focus:ring-indigo-100"
              />
            </div>
            <button
              onClick={openCreate}
              className="rounded-xl bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700"
            >
              + Add Course
            </button>
          </div>
        }
      >
        <div className="space-y-3">
          {filtered.length === 0 ? (
            <div className="rounded-xl border border-dashed border-slate-200 p-6 text-sm text-slate-500">
              No courses found.
            </div>
          ) : (
            filtered.map((c) => (
              <div
                key={c.id}
                className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-slate-50/50 p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <div className="truncate text-sm font-semibold text-slate-900">{c.title}</div>
                    <span
                      className={[
                        "rounded-full px-2 py-0.5 text-[11px] font-medium",
                        c.status === "active"
                          ? "bg-emerald-100 text-emerald-700"
                          : c.status === "archived"
                          ? "bg-slate-200 text-slate-700"
                          : "bg-amber-100 text-amber-700",
                      ].join(" ")}
                    >
                      {c.status}
                    </span>
                  </div>
                  <div className="mt-1 truncate text-xs text-slate-600">{c.summary}</div>
                  <div className="mt-2 text-xs text-slate-500">
                    Price: <span className="font-medium text-slate-700">${c.price}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => openEdit(c)}
                    className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm hover:bg-slate-50"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => remove(c.id)}
                    className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700 hover:bg-rose-100"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </SectionCard>

      <Modal
        open={modalOpen}
        title={editing?.id ? "Edit Course" : "Add Course"}
        onClose={() => setModalOpen(false)}
      >
        {editing ? (
          <div className="space-y-4">
            <Field label="Title">
              <input
                value={editing.title}
                onChange={(e) => setEditing((p) => ({ ...p, title: e.target.value }))}
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-4 focus:ring-indigo-100"
                placeholder="Course title"
              />
            </Field>

            <Field label="Summary">
              <input
                value={editing.summary}
                onChange={(e) => setEditing((p) => ({ ...p, summary: e.target.value }))}
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-4 focus:ring-indigo-100"
                placeholder="Short description"
              />
            </Field>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Price">
                <input
                  type="number"
                  value={editing.price}
                  onChange={(e) => setEditing((p) => ({ ...p, price: Number(e.target.value) }))}
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-4 focus:ring-indigo-100"
                />
              </Field>

              <Field label="Status">
                <select
                  value={editing.status}
                  onChange={(e) => setEditing((p) => ({ ...p, status: e.target.value }))}
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-4 focus:ring-indigo-100"
                >
                  <option value="draft">draft</option>
                  <option value="active">active</option>
                  <option value="archived">archived</option>
                </select>
              </Field>
            </div>

            <Field label="Notes (flexible)">
              <textarea
                value={editing.notes}
                onChange={(e) => setEditing((p) => ({ ...p, notes: e.target.value }))}
                className="min-h-[90px] w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-4 focus:ring-indigo-100"
                placeholder="Add anything until requirements are clear..."
              />
            </Field>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setModalOpen(false)}
                className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                onClick={save}
                className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
              >
                Save
              </button>
            </div>
          </div>
        ) : null}
      </Modal>
    </>
  );
}

function Field({ label, children }) {
  return (
    <div>
      <div className="mb-1 text-xs font-medium text-slate-700">{label}</div>
      {children}
    </div>
  );
}
