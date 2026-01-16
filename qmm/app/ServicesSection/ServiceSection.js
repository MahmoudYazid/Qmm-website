"use client";
// app/components/ServicesSection.jsx
import React from "react";
import { useCourseModalStore } from "../Store/courseModal.store";

const ServicesSection = () => {
      const OpenModal = useCourseModalStore((s) => s.open);
      const CloseModal = useCourseModalStore((s) => s.close);

  
  return (
    <section className="w-full bg-white py-12 lg:py-16 overflow-x-hidden">
      <div className="mx-auto max-w-6xl px-4">
        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-semibold text-emerald-600">Our Services</p>
          <h2 className="mt-2 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
            Fostering a playful &amp; engaging learning
            <br className="hidden sm:block" />
            environment
          </h2>
        </div>

        {/* Cards container: scroll on mobile, grid on desktop */}
        <div className="mt-10">
          <div
            className="
              -mx-4 px-4
              flex gap-6 overflow-x-auto overscroll-x-contain
              snap-x snap-mandatory scroll-px-4 pb-8
              [-ms-overflow-style:none] [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden

              lg:mx-0 lg:px-0
              lg:grid lg:grid-cols-3 lg:overflow-visible
              lg:snap-none lg:scroll-auto lg:pb-0
            "
          >
            {/* CARD 1 (GREEN) */}
            <div
              className="
                snap-center shrink-0
                w-[85%] sm:w-[70%] lg:w-auto
                rounded-2xl bg-emerald-500 p-8 shadow-lg
              "
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-white">
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

                <h3 className="text-xl font-extrabold text-white">
                  Interaction Design
                </h3>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-white/90">
                Lessons on design that cover the
                <br />
                most recent developments.
              </p>

                        <div
                href="#"
                className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700"
                              onClick={OpenModal}


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
              </div>
            </div>

            {/* CARD 2 */}
            <div
              className="
                snap-center shrink-0
                w-[85%] sm:w-[70%] lg:w-auto
                rounded-2xl bg-white p-8 shadow-lg ring-1 ring-black/5
              "
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
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
                </div>

                <h3 className="text-xl font-extrabold text-slate-900">
                  UX Design Course
                </h3>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-slate-500">
                Classes in development that cover the
                <br />
                most recent advancements in web.
              </p>

              <div
                href="#"
                className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700"
                              onClick={OpenModal}


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
              </div>
            </div>

            {/* CARD 3 */}
            <div
              className="
                snap-center shrink-0
                w-[85%] sm:w-[70%] lg:w-auto
                rounded-2xl bg-white p-8 shadow-lg ring-1 ring-black/5
              "
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-50 text-pink-600">
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
                </div>

                <h3 className="text-xl font-extrabold text-slate-900">
                  User Interface Design
                </h3>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-slate-500">
                User Interface Design courses that
                <br />
                cover the most recent trends
              </p>

                       <div
                href="#"
                className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700"
                              onClick={OpenModal}


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
              </div>
            </div>
 {/* CARD 1 (GREEN) */}
            <div
              className="
                snap-center shrink-0
                w-[85%] sm:w-[70%] lg:w-auto
                rounded-2xl bg-emerald-500 p-8 shadow-lg
              "
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-white">
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

                <h3 className="text-xl font-extrabold text-white">
                  Interaction Design
                </h3>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-white/90">
                Lessons on design that cover the
                <br />
                most recent developments.
              </p>

                       <div
                href="#"
                className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700"
                              onClick={OpenModal}


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
              </div>
            </div>

            {/* CARD 2 */}
            <div
              className="
                snap-center shrink-0
                w-[85%] sm:w-[70%] lg:w-auto
                rounded-2xl bg-white p-8 shadow-lg ring-1 ring-black/5
              "
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
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
                </div>

                <h3 className="text-xl font-extrabold text-slate-900">
                  UX Design Course
                </h3>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-slate-500">
                Classes in development that cover the
                <br />
                most recent advancements in web.
              </p>

                       <div
                href="#"
                className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700"
                              onClick={OpenModal}


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
              </div>
            </div>

            {/* CARD 3 */}
            <div
              className="
                snap-center shrink-0
                w-[85%] sm:w-[70%] lg:w-auto
                rounded-2xl bg-white p-8 shadow-lg ring-1 ring-black/5
              "
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-50 text-pink-600">
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
                </div>

                <h3 className="text-xl font-extrabold text-slate-900">
                  User Interface Design
                </h3>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-slate-500">
                User Interface Design courses that
                <br />
                cover the most recent trends
              </p>

                        <div
                href="#"
                className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700"
                              onClick={OpenModal}


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
              </div>
            </div>
            {/* ADD NEW CARD:
                copy one card block and paste here.
                It will auto scroll horizontally on mobile.
            */}
          </div>

          {/* Dots (visual only, no JS) */}
       
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
