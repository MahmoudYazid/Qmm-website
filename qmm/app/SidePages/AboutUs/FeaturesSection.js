"use client";
import React from "react";

export default function FeaturesSection() {
  return (
    <section className="w-full bg-white py-12 lg:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* LEFT: Image block */}
          <div className="relative mx-auto w-full max-w-md lg:mx-0">
            {/* back card */}
            <div className="absolute -left-6 -top-6 hidden h-full w-full rounded-2xl bg-slate-100 lg:block" />

            {/* image card */}
            <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
              <img
                src="/features.jpg"
                alt="Features"
                className="h-72 w-full object-cover sm:h-80 md:h-[420px]"
              />
            </div>
          </div>

          {/* RIGHT: Text */}
          <div className="max-w-xl">
            <p className="text-sm font-semibold text-emerald-600">Features</p>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              We are always working
              <br />
              to provide you best of
              <br />
              the features in all
              <br />
              aspects.
            </h2>

            <p className="mt-6 text-sm leading-relaxed text-slate-600 sm:text-base">
              At WEEKENDUX the chief determination is to clear the minds of our
              students about their goals, while making them consistent in their
              ambitions and pushing them to be confident for their journey
              towards the course of time.
            </p>

            <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-base">
              You will find every little thing on the internet in just a click
              of hand, but here we admire that without knowledge and practice
              the internet may even also fail you in your life.
            </p>

            <button
              type="button"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 active:scale-[0.99]"
            >
              Learn More
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
