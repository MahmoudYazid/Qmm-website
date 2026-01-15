// app/components/TutorsSection.jsx
import React from "react";

const TutorsSection = () => {
  const tutors = [
    {
      name: "Theresa Webb",
      role: "Application Support Analyst",
      role2: "Lead",
      desc:
        "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
      img: "./Avatar1.png",
    },
    {
      name: "Courtney Henry",
      role: "Director, Undergraduate",
      role2: "Analytics and Planning",
      desc: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
      img: "./Avatar.png",
    },
    {
      name: "Albert Flores",
      role: "Career Educator",
      role2: "",
      desc: "Former PM for Linear, Lambda School, and On Deck.",
      img: "./Avatar3.png",
    },
    {
      name: "Marvin McKinney",
      role: "Co-op & Internships Program",
      role2: "& Operations Manager",
      desc: "Former frontend dev for Linear, Coinbase, and Postscript.",
      img: "./Avatar2.png",
    },
        {
      name: "Theresa Webb",
      role: "Application Support Analyst",
      role2: "Lead",
      desc:
        "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
      img: "./Avatar1.png",
    },
    {
      name: "Courtney Henry",
      role: "Director, Undergraduate",
      role2: "Analytics and Planning",
      desc: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
      img: "./Avatar.png",
    },
    {
      name: "Albert Flores",
      role: "Career Educator",
      role2: "",
      desc: "Former PM for Linear, Lambda School, and On Deck.",
      img: "./Avatar3.png",
    },
    {
      name: "Marvin McKinney",
      role: "Co-op & Internships Program",
      role2: "& Operations Manager",
      desc: "Former frontend dev for Linear, Coinbase, and Postscript.",
      img: "./Avatar2.png",
    }
  ];

  return (
    <section className="w-full bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-semibold tracking-wide text-emerald-600">
            Tutors
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Meet the Heroes
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">
            On Weekend UX, instructors from all over the world instruct millions
            of students. We offer the knowledge and abilities.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
          {tutors.map((t, idx) => (
            <article
              key={`${t.name}-${idx}`}
              className="bg-[#F9FAFB] rounded-2xl px-6 py-8 text-center h-full flex flex-col"
            >
              <img
                src={t.img}
                alt={t.name}
                className="mx-auto h-20 w-20 rounded-full object-cover"
              />

              {/* Name: ثابت السطرين كحد أقصى */}
              <h3 className="mt-5 text-base font-extrabold text-slate-900 line-clamp-2 min-h-[2.5rem]">
                {t.name}
              </h3>

              {/* Role: ثابت (سطرين) */}
              <p className="mt-2 text-sm font-medium leading-snug text-emerald-600 line-clamp-2 min-h-[2.75rem]">
                {t.role} {t.role2 ? ` ${t.role2}` : ""}
              </p>

              {/* Description: ثابت (3 سطور) */}
              <p className="mx-auto mt-4 max-w-[18rem] text-sm leading-relaxed text-slate-500 line-clamp-3 min-h-[4.5rem]">
                {t.desc}
              </p>

              {/* Social icons: دايمًا تحت */}
              <div className="mt-auto pt-6 flex items-center justify-center gap-4 text-slate-400">
                <a href="#" aria-label="Twitter" className="hover:text-slate-600">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 5.92c-.7.3-1.4.5-2.2.6.8-.5 1.4-1.2 1.7-2.1-.7.4-1.5.8-2.4.9a3.7 3.7 0 00-6.4 2.5c0 .3 0 .6.1.9-3-.2-5.7-1.7-7.5-4a3.7 3.7 0 001.1 4.9c-.6 0-1.1-.2-1.6-.4v.1c0 1.8 1.3 3.3 3 3.6-.3.1-.6.1-1 .1-.2 0-.4 0-.6-.1.4 1.6 1.9 2.8 3.6 2.8A7.5 7.5 0 012 19.1a10.6 10.6 0 005.7 1.7c6.9 0 10.7-5.8 10.7-10.8v-.5c.8-.6 1.4-1.2 1.9-2z" />
                  </svg>
                </a>

                <a href="#" aria-label="LinkedIn" className="hover:text-slate-600">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.94 6.5a2.2 2.2 0 11-4.4 0 2.2 2.2 0 014.4 0zM2.8 21h4.3V8.2H2.8V21zM9.2 8.2h4.1v1.8h.1c.6-1.1 2-2.3 4.1-2.3 4.4 0 5.2 2.9 5.2 6.6V21h-4.3v-5.3c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V21H9.2V8.2z" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TutorsSection;
