import React from "react";

export default function DashboardShell({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-sky-50 to-violet-50 p-4 sm:p-6">
      <div className="mx-auto w-full max-w-7xl rounded-3xl bg-white/70 p-4 sm:p-6 shadow-xl ring-1 ring-black/5 backdrop-blur">
        {children}
      </div>
    </div>
  );
}
