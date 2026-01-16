'use client';
import React from "react";
import { useCourseModalStore } from "../Store/courseModal.store";

export default function PopUpCoursesComponent() {

    const state = useCourseModalStore((s) => s.state);
    const closeModal = useCourseModalStore((s) => s.close);
    const Data = useCourseModalStore((s) => s.Data);
    











  return (
    state === "close" ? null : (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
  {/* Backdrop */}
  <button
    type="button"
    aria-label="Close"
    onClick={closeModal}
    className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
  />

  {/* Card */}
  <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/10 dark:bg-slate-900 dark:ring-white/10">
    {/* Header */}
    <div className="flex items-start justify-between gap-4 border-b border-slate-200 px-5 py-4 dark:border-white/10">
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <h2 className="truncate text-lg font-semibold text-slate-900 dark:text-white">
            {Data.title}
          </h2>
          <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
            {Data.level}
          </span>
          <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700 dark:bg-white/10 dark:text-slate-200">
            {Data.category}
          </span>
        </div>

        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
          By <span className="font-medium">{Data.instructor}</span> • {Data.duration} • {Data.lessonsCount} lessons
        </p>
      </div>

      <button
        onClick={closeModal}
        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 dark:border-white/10 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-white/5"
      >
        ✕
      </button>
    </div>

    {/* Content */}
    <div className="max-h-[80vh] overflow-y-auto">
      <div className="grid gap-6 p-5 md:grid-cols-5">
        {/* Thumbnail / preview */}
        <div className="md:col-span-2">
          <div className="aspect-video overflow-hidden rounded-xl bg-slate-100 ring-1 ring-black/5 dark:bg-white/5 dark:ring-white/10">
            {/* Replace with <img src={course?.imageUrl} .../> if you have it */}
            <div className="flex h-full w-full items-center justify-center text-sm text-slate-500 dark:text-slate-400">
              Course preview image
            </div>
          </div>

          {/* Stats */}
          <div className="mt-4 grid grid-cols-3 gap-2">
            <div className="rounded-xl border border-slate-200 p-3 dark:border-white/10">
              <div className="text-xs text-slate-500 dark:text-slate-400">Rating</div>
              <div className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
                {Data.rating ?? "4.8"} <span className="text-xs font-medium text-slate-500 dark:text-slate-400">/ 5</span>
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 p-3 dark:border-white/10">
              <div className="text-xs text-slate-500 dark:text-slate-400">Students</div>
              <div className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
                {  Data.students ?? "12k"}
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 p-3 dark:border-white/10">
              <div className="text-xs text-slate-500 dark:text-slate-400">Language</div>
              <div className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
                {Data.language ?? "EN"}
              </div>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="md:col-span-3">
          {/* Description */}
          <p className="text-sm leading-6 text-slate-700 dark:text-slate-200">
            {Data.description}
          </p>

          {/* What you'll learn */}
          <div className="mt-5">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
              What you’ll learn
            </h3>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {(Data.modules ?? []).slice(0, 6).map((m, idx) => (
                <li key={idx} className="flex gap-2 text-sm text-slate-700 dark:text-slate-200">
                  <span className="mt-0.5 text-emerald-600 dark:text-emerald-400">✓</span>
                  <span className="leading-6">{m}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Extra info */}
          <div className="mt-5 grid gap-3 rounded-xl border border-slate-200 p-4 dark:border-white/10">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-600 dark:text-slate-300">Price</span>
              <span className="font-semibold text-slate-900 dark:text-white">{Data.price}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-600 dark:text-slate-300">Certificate</span>
              <span className="font-medium text-slate-900 dark:text-white">
                {Data.certificate ? "Included" : "Not included"}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-600 dark:text-slate-300">Access</span>
              <span className="font-medium text-slate-900 dark:text-white">
                {Data.access ?? "Lifetime"}
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              onClick={closeModal}
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:border-white/10 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-white/5"
            >
              Close
            </button>

            <button
              onClick={Data.enrollCourse}
              className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
            >
              Enroll now
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    )
  );
}
