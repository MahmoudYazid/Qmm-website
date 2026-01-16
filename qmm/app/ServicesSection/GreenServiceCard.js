"use client";
import React from "react";

export default function GreenServiceCard({ onLearnMore }) {
  return (
    <div className="rounded-2xl bg-emerald-500 p-8 shadow-lg min-h-[280px] flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-4 mb-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-white flex-shrink-0">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 4h16v12H4V4z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M7 20h10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M12 16v4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <h3 className="text-lg font-extrabold text-white">
            Interaction Design
          </h3>
        </div>

        <p className="text-sm leading-relaxed text-white/90">
          Lessons on design that cover the most recent developments.
        </p>
      </div>

      <button
        onClick={onLearnMore}
        className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white hover:opacity-90 transition-opacity bg-none border-none cursor-pointer p-0"
      >
        Learn More
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path
            d="M9 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}