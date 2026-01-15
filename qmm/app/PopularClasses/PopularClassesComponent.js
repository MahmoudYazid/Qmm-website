// app/components/PopularClasses.jsx
import React from "react";

const PopularClassesComponent = () => {
  // Replace images + text as you want
  const cards = [
    {
      img: "./Image.png", // <-- replace
      
      category: "Design",
      title: "Figma UI UX Design..",
      desc: "Use Figma to get a job in UI Design, User Interface, User Experience design.",
      rating: "4.3",
      reviews: "(16,325)",
      teacherName: "Jane Cooper",
      enrolled: "2001 Enrolled",
      price: "$17.84",
      avatar: "./Image.png", // <-- replace
    },
    {
      img: "./Image1.png", // <-- replace
     
      category: "Design",
      title: "Learn With Shoaib",
      desc: "Design Web Sites and Mobile Apps that Your Users Love and Return to Again.",
      rating: "3.9",
      reviews: "(832)",
      teacherName: "Jenny Wilson",
      enrolled: "2001 Enrolled",
      price: "$8.99",
      avatar: "./Image1.png", // <-- replace
    },
    {
      img: "./Image2.png", // <-- replace
     
      category: "Design",
      title: "Building User Interface..",
      desc: "Learn how to apply User Experience (UX) principles to your website designs.",
      rating: "4.2",
      reviews: "(125)",
      teacherName: "Esther Howard",
      enrolled: "2001 Enrolled",
      price: "$11.70",
      avatar: "./Image2.png", // <-- replace
    },
  ];

  return (
    <section className="w-full bg-white py-12 lg:py-16 overflow-x-hidden">
      <div className="mx-auto max-w-6xl px-4">
        {/* Heading */}
        <div>
          <p className="text-sm font-semibold text-emerald-600">
            Explore Programs
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Our Most Popular Class
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">
            Let&apos;s join our famous class, the knowledge provided will
            definitely be useful for you.
          </p>
        </div>

        {/* Cards: slider on mobile, grid on lg */}
        <div className="mt-10">
          <div
            className="
              flex gap-6 overflow-x-auto pb-6 px-4
              snap-x snap-mandatory
              [-ms-overflow-style:none] [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
              lg:px-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0
            "
          >
            {cards.map((c) => (
              <article
                key={c.title}
                className="snap-center shrink-0 w-[calc(100%-2rem)] sm:w-[70%] lg:w-auto rounded-2xl bg-white shadow-lg ring-1 ring-black/5"
              >
                {/* image */}
                <div className="relative p-5">
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src={c.img}
                      alt={c.title}
                      className="h-44 w-full object-cover sm:h-48"
                    />
                  </div>

        
                </div>

                {/* content */}
                <div className="px-5 pb-5">
                  <p className="text-xs font-semibold text-emerald-600">
                    {c.category}
                  </p>

                  <div className="mt-2 flex items-start justify-between gap-3">
                    <h3 className="text-lg font-extrabold text-slate-900">
                      {c.title}
                    </h3>
                    <button
                      className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50"
                      aria-label="Open"
                    >
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M7 17L17 7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M10 7h7v7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-slate-500">
                    {c.desc}
                  </p>

                  {/* rating */}
                  <div className="mt-4 flex items-center gap-2 text-sm">
                    <span className="font-bold text-emerald-600">{c.rating}</span>
                    <div className="flex items-center gap-1 text-amber-400">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          className="h-4 w-4"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M12 17.27l5.18 3.04-1.64-5.81L20 9.24l-5.9-.5L12 3.5 9.9 8.74 4 9.24l4.46 5.26-1.64 5.81L12 17.27z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-slate-400">{c.reviews}</span>
                  </div>

                  {/* footer */}
                  <div className="mt-5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={c.avatar}
                        alt={c.teacherName}
                        className="h-9 w-9 rounded-full object-cover"
                      />
                      <div className="leading-tight">
                        <div className="text-sm font-semibold text-slate-900">
                          {c.teacherName}
                        </div>
                        <div className="text-xs text-slate-400">{c.enrolled}</div>
                      </div>
                    </div>

                    <div className="text-lg font-extrabold text-emerald-600">
                      {c.price}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

     

 
        </div>
      </div>
    </section>
  );
};

export default PopularClassesComponent;
