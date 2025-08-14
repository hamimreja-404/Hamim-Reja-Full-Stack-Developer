import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import pic from "../asset/img/Avatar.png";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/data")
      .then((res) => res.json())
      .then((data) => {
        setTestimonials(data);
      })
      .catch((err) => console.error("Error fetching testimonials:", err));
  }, []);

  return (
    <>
    {testimonials.length > 0 &&( <section className="py-24">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 mt-16">
          <span className="section__subtitle" data-aos="fade-up">
            Testimonials
          </span>
          <h3 className="section__title" data-aos="fade-up">
            What our happy user says!
          </h3>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          className="mySwiper w-7xl flex justify-center"
          slidesPerView={1}
          spaceBetween={32}
          loop
          centeredSlides
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 32 },
            768: { slidesPerView: 2, spaceBetween: 32 },
            1024: { slidesPerView: 3, spaceBetween: 32 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="group box__ h-[250px] bg-white border border-solid border-gray-300 rounded-xl p-6 flex flex-col justify-between transition-all duration-500 w-full mx-auto hover:border-indigo-600 hover:shadow-sm"
                data-aos="fade-up"
              >
                {/* Star + Rating */}
                <div className="flex items-center gap-2 text-amber-500 m-6">
                {console.log(typeof(item.star))}
                {console.log(item.star)}
                  {Array.from({ length: parseInt(item.star) || 0 }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      viewBox="0 0 18 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                        fill="currentColor"
                      />
                    </svg>
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-base text-gray-600 leading-6 group-hover:text-gray-800">
                  {item.text}
                </p>

                {/* Divider line */}
                <div className="border-t line__ my-2"></div>

                {/* Profile section */}
                <div className="flex items-center gap-5">
                  <img
                    className="rounded-full h-10 w-10 object-cover"
                    src={pic}
                    alt="avatar"
                  />
                  <div>
                    <h5 className="text-gray-900 font-medium mb-1">
                      {item.name}
                    </h5>
                    <span className="text-sm leading-4 text-gray-500">
                      {item.role}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center gap-2 cursor-pointer">
          <p
            className="text-sm font-medium work__button"
            onClick={() => (window.location.href = "/review")}
          >
            Share Your Experience{" "}
            <i className="bx bx-right-arrow work__icon"></i>
          </p>
        </div>
      </div>
    </section> )}
    
    </>
  );
}
