import React from "react";

const stats = [
  { title: "Total Sales", value: "$1k", hint: "+8% from yesterday", icon: "💳", tone: "bg-rose-50" },
  { title: "Total Orders", value: "300", hint: "+5% from yesterday", icon: "🧾", tone: "bg-amber-50" },
  { title: "Products Sold", value: "5", hint: "+1% from yesterday", icon: "📦", tone: "bg-emerald-50" },
  { title: "New Customers", value: "8", hint: "+2% from yesterday", icon: "👤", tone: "bg-violet-50" },
];

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((s) => (
        <div
          key={s.title}
          className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div className={`h-10 w-10 rounded-xl ${s.tone} grid place-items-center`}>
              <span>{s.icon}</span>
            </div>
            <span className="text-xs text-slate-400">Today</span>
          </div>

          <div className="mt-3 text-2xl font-semibold text-slate-900">{s.value}</div>
          <div className="mt-1 text-sm text-slate-600">{s.title}</div>
          <div className="mt-2 text-xs text-slate-500">{s.hint}</div>
        </div>
      ))}
    </div>
  );
}
