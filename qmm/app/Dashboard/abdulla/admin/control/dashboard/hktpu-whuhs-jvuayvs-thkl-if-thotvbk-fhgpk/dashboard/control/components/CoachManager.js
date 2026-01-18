"use client";

import React, { useMemo, useState } from "react";
import SectionCard from "./SectionCard";
import Modal from "./Modal";

function uid() {
  return Math.random().toString(16).slice(2) + Date.now().toString(16);
}

export default function CoachManager() {
  const [coaches, setCoaches] = useState(() => [
    {
      id: uid(),
      name: "Mousa",
      headline: "Backend coach",
      info: "Laravel, APIs, deployment",
      contact: "mousa@example.com",
    },
    {
      id: uid(),
      name: "Sara",
      headline: "Language coach",
      info: "German B1/B2 exam strategy",
      contact: "+49 000 000 000",
    },
  ]);

  const [query, setQuery] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return coaches;
    return coaches.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        (c.headline || "").toLowerCase().includes(q) ||
        (c.info || "").toLowerCase().includes(q)
    );
  }, [coaches, query]);

  function openCreate() {
    setEditing({ id: null, name: "", headline: "", info: "", contact: "" });
    setModalOpen(true);
  }

  function openEdit(coach) {
    setEditing({ ...coach });
    setModalOpen(true);
  }

  function remove(id) {
    setCoaches((prev) => prev.filter((c) => c.id !== id));
  }

  function save() {
    if (!editing.name.trim()) return;

    setCoaches((prev) => {
      if (editing.id) return prev.map((c) => (c.id === editing.id ? { ...editing } : c));
      return [{ ...editing, id: uid() }, ...prev];
    });

    setModalOpen(false);
  }

  return (
    <>
      <SectionCard
        title="Coaches"
        subtitle="Add, delete, modify coaches (name + info)"
        right={
          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search coaches..."
                className="w-56 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-4 focus:ring-indigo-100"
              />
            </div>
            <button
              onClick={openCreate}
              className="rounded-xl bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700"
            >
              + Add Coach
            </button>
          </div>
        }
      >
        <div className="space-y-3">
          {filtered.length === 0 ? (
            <div className="rounded-xl border border-dashed border-slate-200 p-6 text-sm text-slate-500">
              No coaches found.
            </div>
          ) : (
            filtered.map((c) => (
              <div
                key={c.id}
                className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-slate-50/50 p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <div className="truncate text-sm font-semibold text-slate-900">{c.name}</div>
                    {c.headline ? (
                      <span className="rounded-full bg-sky-100 px-2 py-0.5 text-[11px] font-medium text-sky-700">
                        {c.headline}
                      </span>
                    ) : null}
                  </div>
                  <div className="mt-1 text-xs text-slate-600">{c.info}</div>
                  <div className="mt-2 text-xs text-slate-500">
                    Contact: <span className="font-medium text-slate-700">{c.contact}</span>
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
        title={editing?.id ? "Edit Coach" : "Add Coach"}
        onClose={() => setModalOpen(false)}
      >
        {editing ? (
          <div className="space-y-4">
            <Field label="Name">
              <input
                value={editing.name}
                onChange={(e) => setEditing((p) => ({ ...p, name: e.target.value }))}
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-4 focus:ring-indigo-100"
                placeholder="Coach name"
              />
            </Field>

            <Field label="Headline (optional)">
              <input
                value={editing.headline}
                onChange={(e) => setEditing((p) => ({ ...p, headline: e.target.value }))}
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-4 focus:ring-indigo-100"
                placeholder="e.g. Backend coach"
              />
            </Field>

            <Field label="Info">
              <textarea
                value={editing.info}
                onChange={(e) => setEditing((p) => ({ ...p, info: e.target.value }))}
                className="min-h-[90px] w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-4 focus:ring-indigo-100"
                placeholder="Coach skills / background / notes..."
              />
            </Field>

            <Field label="Contact (email/phone)">
              <input
                value={editing.contact}
                onChange={(e) => setEditing((p) => ({ ...p, contact: e.target.value }))}
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-4 focus:ring-indigo-100"
                placeholder="coach@email.com or +49..."
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
