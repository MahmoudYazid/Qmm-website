"use client";

import React from "react";

export default function TopBar() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-indigo-600/90 shadow-sm" />
        <div>
          <div className="text-lg font-semibold text-slate-900">Dashboard</div>
          <div className="text-xs text-slate-500">Admin control center</div>
        </div>
      </div>

     
    </div>
  );
}
