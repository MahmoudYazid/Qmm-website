// app/components/HeroSection.jsx
import React from "react";

const heroComponent = () => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 lg:py-16">
        {/* 2 columns on lg+, stacked on mobile */}
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* LEFT */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <h1 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Up Your <span className="text-emerald-600">Skills</span>
              <br />
              To <span className="text-emerald-600">Advance</span> Your
              <br />
              <span className="text-emerald-600">Career</span> Path
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg">
              Learn UI-UX Design skills with weekend UX. The latest online
              learning system and material that help your knowledge growing.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white shadow-sm hover:bg-emerald-700">
                Get Started
              </button>
              <button className="rounded-xl bg-emerald-50 px-6 py-3 font-semibold text-emerald-700 hover:bg-emerald-100">
                Get free trial
              </button>
            </div>

            {/* Small features row */}
            <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 3a7 7 0 017 7c0 3-2 5-2 5H7s-2-2-2-5a7 7 0 017-7z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M9 21h6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <span>Public Speaking</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-rose-50 text-rose-500">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 7h10v14H7V7z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M9 7V5a3 3 0 016 0v2"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </span>
                <span>Career-Oriented</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-fuchsia-50 text-fuchsia-500">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2v6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M12 16v6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M4.93 4.93l4.24 4.24"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M14.83 14.83l4.24 4.24"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M2 12h6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M16 12h6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M4.93 19.07l4.24-4.24"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M14.83 9.17l4.24-4.24"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <span>Creative Thinking</span>
              </div>
            </div>
          </div>

          {/* RIGHT (stable on mobile, absolute only on lg) */}
          <div className="w-full">
            <div className="grid gap-4">
              <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
                <div className="grid place-items-center">
                  <div className="relative w-full flex items-center justify-center">
                    <div className="mx-auto aspect-square w-full rounded-full  overflow-visible flex items-end justify-center">
                      <img
                        src="/smilegirl.png"
                        alt="Student"
                        className="min-h-[30rem] w-auto object-contain "
                      />
                    </div>
                  </div>

               
                </div>
              </div>
            </div>

            {/* background circle lines (optional) */}
            <div className="pointer-events-none absolute -left-10 top-20 hidden h-72 w-72 rounded-full border border-emerald-100 lg:block" />
            <div className="pointer-events-none absolute -right-14 bottom-6 hidden h-56 w-56 rounded-full border border-emerald-100 lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default heroComponent;
