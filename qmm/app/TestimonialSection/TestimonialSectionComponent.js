// app/components/TestimonialSection.jsx
import React from "react";

const TestimonialSectionComponent = () => {
  return (
    <section className="w-full bg-[#F0FAF7] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Top small logo (replace image path) */}
          <img
            src="./smallLogo.png" // <-- replace with your small top logo
            alt="Logo"
            className="mx-auto h-10 w-auto opacity-90"
          />

          {/* Quote */}
          <h3 className="mt-10 text-2xl font-extrabold leading-snug text-slate-900 sm:text-4xl sm:leading-tight">
            Courses was fantastic! It is Master platform for those looking to
            start a new career, or need a refresher.
          </h3>

          {/* Person */}
          <div className="mt-10 flex flex-col items-center">
            <img
              src="./testmonial.png" // <-- replace with your avatar image
              alt="Jacob Jones"
              className="h-14 w-14 rounded-full object-cover"
            />
            <p className="mt-3 text-sm font-semibold text-slate-900">
              Jacob Jones
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Student, National University
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSectionComponent;
