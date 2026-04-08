"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

export type CategoryType =
  | "all"
  | "wraps"
  | "ppf"
  | "ceramic coating"
  | "window tint";

export const GallerySection = () => {
  const CATEGORIES = {
    all: "all" as CategoryType,
    wraps: "wraps" as CategoryType,
    ppf: "ppf" as CategoryType,
    ceramicCoating: "ceramic coating" as CategoryType,
    windowTint: "window tint" as CategoryType,
  };

  const gallery = [
    { imgSrc: "/work/image3.jpeg", category: CATEGORIES.wraps },
    { imgSrc: "/work/image11.jpeg", category: CATEGORIES.wraps },
    { imgSrc: "/work/image5.jpeg", category: CATEGORIES.ppf },
    { imgSrc: "/work/image9.jpeg", category: CATEGORIES.ppf },
    { imgSrc: "/work/image16.jpeg", category: CATEGORIES.ceramicCoating },
    { imgSrc: "/work/image22.jpeg", category: CATEGORIES.ceramicCoating },
    { imgSrc: "/work/image23.jpeg", category: CATEGORIES.wraps },
    { imgSrc: "/work/image18.jpeg", category: CATEGORIES.windowTint },
    { imgSrc: "/work/image13.jpeg", category: CATEGORIES.wraps },
  ];

  const [filteredGallery, setFilteredGallery] = useState([...gallery]);
  const [category, setCategory] = useState<CategoryType>(
    CATEGORIES.all as CategoryType
  );

  const handleCategoryClick = (category: CategoryType) => {
    setCategory(category);
    if (category === CATEGORIES.all) {
      setFilteredGallery([...gallery]);
    } else {
      setFilteredGallery(
        gallery.filter((item) => item.category.match(category))
      );
    }
  };

  return (
    <div
      id="gallery"
      className="relative py-20 sm:py-28 w-full layoutPadding text-center"
    >
      <div className="max-w-screen-format mx-auto">
        <span className="text-xs tracking-[0.4em] uppercase text-white/40 font-light">
          Our Work
        </span>
        <h1 className="font-bold text-3xl sm:text-5xl mt-4 tracking-wide uppercase">
          Gallery
        </h1>
        <div className="w-12 h-[1px] bg-white/30 mt-6 mb-8 mx-auto" />

        <div className="py-3 flex flex-wrap gap-4 sm:gap-8 justify-center">
          {Object.values(CATEGORIES).map((val) => (
            <button
              key={val}
              onClick={() => {
                handleCategoryClick(val);
              }}
              className={cn(
                "py-1 px-1 text-xs sm:text-sm uppercase tracking-[0.2em] font-light transition-all border-b",
                category === val
                  ? "border-white text-white"
                  : "border-transparent text-white/40 hover:text-white/70"
              )}
            >
              {val}
            </button>
          ))}
        </div>

        <div className="pt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4 relative">
          {filteredGallery.map(({ imgSrc }, index) => (
            <GalleryItem key={`galleryItem-${index}`} imgSrc={imgSrc} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const GalleryItem = ({ imgSrc }: GalleryItemProps) => {
  return (
    <div className="relative overflow-hidden aspect-square group cursor-pointer">
      <Image
        src={imgSrc}
        alt="Gallery Image"
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
    </div>
  );
};

export interface GalleryItemProps {
  imgSrc: string;
}
