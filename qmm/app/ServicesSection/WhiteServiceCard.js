"use client";
import React from "react";

export default function WhiteServiceCard({
  title,
  desc,
  iconBg,
  iconColor,
  onLearnMore,
}) {
  // Default icons
  const icons = {
    indigo: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 5h16v12H4V5z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M8 21h8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M12 17v4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M9 9h6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    pink: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 4h16v16H4V4z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M7 15l3-3 2 2 5-5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  };

  const getIcon = () => {
    if (iconBg?.includes("indigo")) return icons.indigo;
    if (iconBg?.includes("pink")) return icons.pink;
    return icons.indigo;
  };

  return (
    <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-black/5 min-h-[280px] flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-4 mb-6">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-xl ${iconBg} ${iconColor} flex-shrink-0`}
          >
            {getIcon()}
          </div>

          <h3 className="text-lg font-extrabold text-slate-900">
            {title}
          </h3>
        </div>

        <p className="text-sm leading-relaxed text-slate-600">
          {desc}
        </p>
      </div>

      <button
        onClick={onLearnMore}
        className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors bg-none border-none cursor-pointer p-0"
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