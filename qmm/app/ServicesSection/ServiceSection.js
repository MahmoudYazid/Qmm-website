"use client";
import React from "react";
import Slider from "react-slick";
import { useCourseModalStore } from "../Store/courseModal.store";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import GreenServiceCard from "./GreenServiceCard";
import WhiteServiceCard from "./WhiteServiceCard";

const ServicesSection = () => {
  const OpenModal = useCourseModalStore((s) => s.open);

  const settings = {
    dots: true,
    arrows: false,          // ✅ THIS stops the horizontal overflow
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
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <section className="w-full bg-white py-12 lg:py-16 overflow-x-hidden">
      <div className="mx-auto max-w-6xl px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-emerald-600">Our Services</p>
          <h2 className="mt-2 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
            Fostering a playful &amp; engaging learning
            <br className="hidden sm:block" />
            environment
          </h2>
        </div>

        {/* Slider */}
        <div className="[&_.slick-list]:overflow-hidden [&_.slick-slide>div]:px-3">
          <Slider {...settings}>
            <div className="h-full">
              <div className="w-full max-w-[420px] mx-auto">
                <GreenServiceCard onLearnMore={OpenModal} />
              </div>
            </div>

            <div className="h-full">
              <div className="w-full max-w-[420px] mx-auto">
                <WhiteServiceCard
                  title="UX Design Course"
                  desc="Classes in development that cover the most recent advancements in web."
                  iconBg="bg-indigo-50"
                  iconColor="text-indigo-600"
                  onLearnMore={OpenModal}
                />
              </div>
            </div>

            <div className="h-full">
              <div className="w-full max-w-[420px] mx-auto">
                <WhiteServiceCard
                  title="User Interface Design"
                  desc="User Interface Design courses that cover the most recent trends"
                  iconBg="bg-pink-50"
                  iconColor="text-pink-600"
                  onLearnMore={OpenModal}
                />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
