"use client";
import React from "react";

export default function BenefitsSection() {
  const cards = [
    {
      no: "01",
      title: "Standardization",
      desc:
        "When working in a global workplace, it’s often difficult to gauge learners’ training experiences, which are ...",
    },
    {
      no: "02",
      title: "Reduced Costs",
      desc:
        "With Weekend UX, there’s no cost to reproduce materials and, thanks to mobile learning and microlearning ...",
    },
    {
      no: "03",
      title: "More Customization",
      desc:
        "Just like learners aren’t one-size-fits-all, learning is not a one-size-fits-all experience. By using different ...",
    },
    {
      no: "04",
      title: "Affordable Pricing",
      desc:
        "With Weekend UX, there’s no cost to reproduce materials and, thanks to mobile learning and microlearning ...",
    },
    {
      no: "05",
      title: "Learner Satisfaction",
      desc:
        "If you really want students to retain what they learn, you’ll need to aim for high satisfaction rates. Bad ...",
    },
    {
      no: "06",
      title: "Multimedia Materials",
      desc:
        "One of the main reasons why custom eLearning is effective is that it’s the perfect delivery method for ...",
    },
  ];

  return (
    <section className="w-full bg-white py-12 lg:py-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-semibold text-emerald-600">Our Benefits</p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            By Joining WEEKENS UX Platform,
            <br className="hidden sm:block" />
            One Can Avail a Lot Of Benefits.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-500 sm:text-base">
            Install our top-rated dropshipping app to your e-commerce site and get
            access to US Suppliers, AliExpress vendors, and the best.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, idx) => (
            <article
              key={c.no}
              className={[
                "rounded-2xl border border-slate-200/60 p-6 shadow-sm",
                idx % 2 === 0 ? "bg-emerald-50/40" : "bg-white",
              ].join(" ")}
            >
              {/* number */}
              <div className="relative inline-flex items-start">
                <span className="text-2xl font-extrabold text-emerald-600">
                  {c.no}
                </span>
                <span className="absolute -left-1 top-1 h-4 w-4 rotate-45 rounded bg-emerald-200/50" />
              </div>

              <h3 className="mt-4 text-lg font-extrabold text-slate-900">
                {c.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {c.desc}{" "}
                <a href="#" className="font-semibold text-emerald-600 hover:text-emerald-700">
                  Read More
                </a>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
