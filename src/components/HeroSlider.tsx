"use client";

import React from "react";
import Link from "next/link";
import { homePageData } from "../data/mockData";

export default function HeroSlider() {
  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="overflow-hidden relative max-w-7xl mx-auto rounded-xl shadow-xl">
        <div
          className="
            grid grid-cols-1 md:grid-cols-2
            gap-8 md:gap-10
            transition-all duration-500 ease-in-out
            justify-center
            direction-rtl
          "
        >
          {homePageData.sliderItems && homePageData.sliderItems.length > 0 ? (
            homePageData.sliderItems.map((item) => (
              <div
                key={item.id}
                className="
                  relative w-full h-80 md:h-96 lg:h-[450px]
                  bg-cover bg-center
                  flex items-center justify-center
                  rounded-lg overflow-hidden
                  shadow-lg group
                  transform transition-transform duration-500 ease-in-out
                  hover:scale-105 hover:shadow-2xl
                "
                style={{ backgroundImage: `url(${item.image})` }}
              >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-10 transition-opacity duration-300"></div>

                {/* Content box */}
                <div
                  className="
                    relative z-10
                    bg-white bg-opacity-90
                    p-6 md:p-8 rounded-xl
                    text-center max-w-sm
                    shadow-lg
                    transition-transform duration-300 ease-in-out
                  "
                >
                  <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
                    {item.title}
                  </h2>
                  <p className="text-gray-700 text-base md:text-lg mt-2 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <Link
                    href={item.link}
                    className="
                      inline-block mt-4
                      px-8 py-3
                      bg-blue-600 text-white font-semibold
                      rounded-full
                      shadow-md
                      hover:bg-blue-700
                      hover:scale-105 hover:shadow-lg
                      transition-all duration-300 ease-in-out
                      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
                    "
                  >
                    مشاهده محصولات
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 text-lg py-10">
              اطلاعاتی برای نمایش موجود نیست
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
