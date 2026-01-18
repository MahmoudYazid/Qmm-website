"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PopularClassesComponent = () => {
  const cards = [
    {
      img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
      category: "Design",
      title: "Figma UI UX Design..",
      desc: "Use Figma to get a job in UI Design, User Interface, User Experience design.",
      rating: "4.3",
      reviews: "(16,325)",
      teacherName: "Jane Cooper",
      enrolled: "2001 Enrolled",
      price: "$17.84",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop",
    },
    {
      img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
      category: "Design",
      title: "Learn With Shoaib",
      desc: "Design Web Sites and Mobile Apps that Your Users Love and Return to Again.",
      rating: "3.9",
      reviews: "(832)",
      teacherName: "Jenny Wilson",
      enrolled: "2001 Enrolled",
      price: "$8.99",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop",
    },
    {
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      category: "Design",
      title: "Building User Interface..",
      desc: "Learn how to apply User Experience (UX) principles to your website designs.",
      rating: "4.2",
      reviews: "(125)",
      teacherName: "Esther Howard",
      enrolled: "2001 Enrolled",
      price: "$11.70",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop",
    },
    {
      img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
      category: "Design",
      title: "Figma UI UX Design..",
      desc: "Use Figma to get a job in UI Design, User Interface, User Experience design.",
      rating: "4.3",
      reviews: "(16,325)",
      teacherName: "Jane Cooper",
      enrolled: "2001 Enrolled",
      price: "$17.84",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: "ease-in-out",
    draggable: true,
    swipeToSlide: true,
    touchThreshold: 5,
    slidesToShow: 2,
    slidesToScroll: 1,
    rtl: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, slidesToScroll: 1, arrows: false },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1, arrows: false },
      },
    ],
  };

  return (
    <section className="w-full bg-white py-8 lg:py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-8 sm:mb-12">
          <p className="text-xs sm:text-sm font-semibold text-emerald-600">
            Explore Programs
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900">
            Our Most Popular Class
          </h2>
          <p className="mt-3 max-w-2xl text-xs sm:text-sm lg:text-base leading-relaxed text-slate-500">
            Let&apos;s join our famous class, the knowledge provided will definitely be useful for you.
          </p>
        </div>

        {/* Cards: slick slider */}
        <div className="mt-6 sm:mt-10 -mx-2 sm:-mx-3">
          <Slider {...settings}>
            {cards.map((c) => (
              <div key={c.title + Math.random()} className="px-2 sm:px-3">
                <article className="rounded-xl sm:rounded-2xl bg-white shadow-lg ring-1 ring-black/5 h-full flex flex-col">
                  {/* image */}
                  <div className="relative p-3 sm:p-5 pb-0 sm:pb-0">
                    <div className="overflow-hidden rounded-lg sm:rounded-xl">
                      <img
                        src={c.img}
                        alt={c.title}
                        className="h-32 sm:h-44 lg:h-48 w-full object-cover"
                      />
                    </div>
                  </div>

                  {/* content */}
                  <div className="px-3 sm:px-5 pb-3 sm:pb-5 flex flex-col flex-grow">
                    <p className="text-xs font-semibold text-emerald-600 mt-3 sm:mt-4">
                      {c.category}
                    </p>

                    <div className="mt-2 flex items-start justify-between gap-2">
                      <h3 className="text-base sm:text-lg font-extrabold text-slate-900 line-clamp-2">
                        {c.title}
                      </h3>
                      <button
                        className="mt-1 inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 flex-shrink-0"
                        aria-label="Open"
                      >
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
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

                    <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-slate-500 line-clamp-3">
                      {c.desc}
                    </p>

                    {/* rating */}
                    <div className="mt-3 sm:mt-4 flex items-center gap-2 text-xs sm:text-sm">
                      <span className="font-bold text-emerald-600">
                        {c.rating}
                      </span>
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <svg
                            key={i}
                            className="h-3 w-3 sm:h-4 sm:w-4"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 17.27l5.18 3.04-1.64-5.81L20 9.24l-5.9-.5L12 3.5 9.9 8.74 4 9.24l4.46 5.26-1.64 5.81L12 17.27z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-xs text-slate-400 line-clamp-1">{c.reviews}</span>
                    </div>

                    {/* footer */}
                    <div className="mt-auto pt-4 sm:pt-5 flex items-center justify-between border-t border-slate-100">
                      <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                        <img
                          src={c.avatar}
                          alt={c.teacherName}
                          className="h-8 w-8 sm:h-9 sm:w-9 rounded-full object-cover flex-shrink-0"
                        />
                        <div className="leading-tight min-w-0">
                          <div className="text-xs sm:text-sm font-semibold text-slate-900 truncate">
                            {c.teacherName}
                          </div>
                          <div className="text-xs text-slate-400 truncate">
                            {c.enrolled}
                          </div>
                        </div>
                      </div>

                      <div className="text-base sm:text-lg font-extrabold text-emerald-600 flex-shrink-0">
                        {c.price}
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default PopularClassesComponent;