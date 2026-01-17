"use client";
import React from "react";

export default function AboutUsHeroSelction() {
  return (
    <section className="w-full bg-white py-12 lg:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Left */}
          <div>
            <h2 className="text-4xl font-extrabold text-emerald-600 sm:text-5xl">
              About Us
            </h2>

            <p className="mt-4 text-xl font-extrabold leading-snug text-slate-900 sm:text-2xl">
              <span className="text-orange-500">WEEKEND UX</span>{" "}
              <span>Providing The Best Opportunities To The Students Around The Glob.</span>
            </p>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Weekend UX, is a UI/UX Design Academy in Delhi involved in User Experience and User
              Interface Training and Consulting. It was started in 2023, and passionate towards User
              Interface Design/ User Experience Design, Human Computer Interaction Design. Humanoid
              is gushing towards competence to acquire knowledge and have a wide understanding
              towards the sphere through the foremost courses in the area of UI/UX Design, by
              strengthening up your skills, for your golden future
            </p>

            <button
              type="button"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 active:scale-[0.99]"
            >
              Join Us
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
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

          {/* Right */}
          <div className="relative mx-auto w-full max-w-xl">
            {/* soft background block */}
            <div className="absolute right-2 top-6 hidden h-[360px] w-[360px] rounded-3xl bg-slate-100 lg:block" />

            {/* main image */}
            <div className="relative overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5">
              <img
                src="/about-main.jpg"
                alt="Team working"
                className="h-64 w-full object-cover sm:h-80 lg:h-[340px]"
              />
            </div>

            {/* floating image */}
            <div className="absolute right-4 top-4 w-[70%] max-w-[360px] overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/10 sm:right-6 sm:top-6">
              <img
                src="/about-top.jpg"
                alt="Office"
                className="h-36 w-full object-cover sm:h-44"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
