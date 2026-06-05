"use client";

import { useEffect, useState } from "react";
import { announcementData } from "@/utils/helper";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AnnouncementBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const nextAnnouncement = () => {
    setFade(false);

    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % announcementData.length);
      setFade(true);
    }, 300);
  };

  const prevAnnouncement = () => {
    setFade(false);

    setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === 0 ? announcementData.length - 1 : prev - 1,
      );
      setFade(true);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextAnnouncement();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#171717] h-12 flex items-center">
      <div className="container mx-auto max-w-310 px-4">
        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            aria-label="Previous"
            onClick={prevAnnouncement}
            className="absolute left-0 text-white cursor-pointer"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Announcement */}
          <div className="px-4 py-1 overflow-hidden">
            <p
              className={`text-white text-xs md:text-sm uppercase tracking-[3px] text-center transition-all duration-500 ease-in-out ${
                fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {announcementData[currentIndex]}
            </p>
          </div>

          {/* Right Arrow */}
          <button
            aria-label="Next"
            onClick={nextAnnouncement}
            className="absolute right-0 text-white cursor-pointer"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
