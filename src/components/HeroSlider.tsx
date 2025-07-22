"use client";

import { homePageData } from "@/data/mockData";
import Link from "next/link";

export default function HeroSlider() {
  return (
    <section className="w-full py-8 px-4 sm:px-6 lg:px-8 ">
      <div className="overflow-hidden relative">
        <div className="grid md:grid-cols-2 sm:grid-cols-1 transition-all duration-500 ease-in-out justify-center gap-10">
          {homePageData.sliderItems?.length > 0 ? (
            homePageData.sliderItems.map((item) => (
              <div
                key={item.id}
                className="w-full h-170  bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="bg-[#f5f5f5] bg-opacity-80 p-4 rounded-md text-center max-w-md ">
                  <h2 className="text-xl font-bold text-gray-800">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                  <Link
                    href={item.link}
                    className="inline-block mt-4 px-4 py-2 bg-[#ED1945] text-white rounded hover:bg-blue-700"
                  >
                    مشاهده محصولات
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">اطلاعاتی برای نمایش موجود نیست</p>
          )}
        </div>
      </div>
    </section>
  );
}
