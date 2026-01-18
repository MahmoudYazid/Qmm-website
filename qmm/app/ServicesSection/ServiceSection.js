"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useCourseModalStore } from "../Store/courseModal.store";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import GreenServiceCard from "./GreenServiceCard";
import WhiteServiceCard from "./WhiteServiceCard";

// ✅ important: react-slick client-only (no SSR)
const Slick = dynamic(() => import("react-slick"), { ssr: false });

export default function ServicesSection() {
  const OpenModal = useCourseModalStore((s) => s.open);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 1500,
  cssEase: "ease-in-out",
  draggable: true,
  swipeToSlide: true,
  touchThreshold: 5,

  mobileFirst: true,     // ✅ key point
  slidesToShow: 1,       // ✅ default = mobile
  slidesToScroll: 1,

  responsive: [
    {
      breakpoint: 768,   // ✅ means >= 768 because mobileFirst:true
      settings: { slidesToShow: 2, slidesToScroll: 1 },
    },
  ],
};

  const Slide = ({ children }) => (
    <div className="h-full">
      <div className="w-full max-w-[420px] mx-auto">{children}</div>
    </div>
  );

  return (
    <section className="w-full bg-white py-12 lg:py-16 overflow-x-hidden">
      <div className="mx-auto max-w-6xl px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-emerald-600">Our Services</p>
          <h2 className="mt-2 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
            Fostering a playful &amp; engaging learning{" "}
            <br className="hidden sm:block" />
            environment
          </h2>
        </div>

        {/* Slider */}
        <div className="relative -mx-3 overflow-hidden">
          {mounted ? (
            <Slick
              {...settings}
              className="[&_.slick-list]:overflow-hidden [&_.slick-slide>div]:px-3"
            >
              <Slide>
                <GreenServiceCard onLearnMore={OpenModal} />
              </Slide>

              <Slide>
                <WhiteServiceCard
                  title="UX Design Course"
                  desc="Classes in development that cover the most recent advancements in web."
                  iconBg="bg-indigo-50"
                  iconColor="text-indigo-600"
                  onLearnMore={OpenModal}
                />
              </Slide>

              <Slide>
                <WhiteServiceCard
                  title="User Interface Design"
                  desc="User Interface Design courses that cover the most recent trends"
                  iconBg="bg-pink-50"
                  iconColor="text-pink-600"
                  onLearnMore={OpenModal}
                />
              </Slide>
            </Slick>
          ) : (
            // ✅ SSR fallback (no weird refresh layout)
            <div className="grid gap-6 sm:grid-cols-2">
              <GreenServiceCard onLearnMore={OpenModal} />
              <WhiteServiceCard
                title="UX Design Course"
                desc="Classes in development that cover the most recent advancements in web."
                iconBg="bg-indigo-50"
                iconColor="text-indigo-600"
                onLearnMore={OpenModal}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
