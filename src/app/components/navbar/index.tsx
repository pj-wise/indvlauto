"use client";
import Link from "next/link";
import { HamburgerMenu, MenuBody } from "../hamburger-menu";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const linkClassName =
    "link hover:text-white/60 transition-colors tracking-wider text-sm font-medium uppercase";

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    }
  }, [showMenu]);

  return (
    <>
      <nav className="hidden z-[100] lg:flex justify-between items-center bg-background/80 backdrop-blur-md left-0 right-0 absolute py-5 layoutPadding border-b border-white/5">
        <div className="w-full max-w-screen-format lg:flex justify-between items-center">
          <Link href="/" className="font-bold text-2xl tracking-[0.3em] uppercase">
            INDVL
          </Link>

          <div className="flex justify-evenly gap-8 transition-colors items-center">
            <Link href="/#hero" className={linkClassName}>
              Home
            </Link>
            <Link href="/#about" className={linkClassName}>
              About
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger
                className={`${linkClassName} flex items-center gap-1 outline-none z-[200]`}
              >
                Services
                <ChevronDown className="h-3 w-3 text-white/60" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-black border-white/10 min-w-[280px] z-[200]">
                <DropdownMenuItem asChild>
                  <Link
                    href="/vehicle-wraps"
                    className="text-white hover:text-white hover:bg-white/5 cursor-pointer"
                  >
                    Vehicle Wraps
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/ppf"
                    className="text-white hover:text-white hover:bg-white/5 cursor-pointer"
                  >
                    Paint Protection Film (PPF)
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/ceramic-coating"
                    className="text-white hover:text-white hover:bg-white/5 cursor-pointer"
                  >
                    Paint Correction & Ceramic Coating
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/window-tint"
                    className="text-white hover:text-white hover:bg-white/5 cursor-pointer"
                  >
                    Window Tint
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/commercial"
                    className="text-white hover:text-white hover:bg-white/5 cursor-pointer"
                  >
                    Commercial Services
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/#gallery" className={linkClassName}>
              Gallery
            </Link>
            <Link href="/#contact" className={linkClassName}>
              Contact
            </Link>
          </div>

          <Link
            href="#contact"
            className="hover:bg-white/90 transition-colors bg-white text-black font-medium h-fit py-2 px-6 text-sm tracking-wider uppercase"
          >
            Book Now
          </Link>
        </div>
      </nav>

      <nav className="flex z-[999] lg:hidden justify-between items-center bg-background/80 backdrop-blur-md left-0 right-0 absolute py-6 layoutPadding border-b border-white/5">
        <Link href="/" className="font-bold text-2xl tracking-[0.3em] uppercase">
          INDVL
        </Link>
        <div className="flex items-center gap-3">
          <Link href="/#contact">
            <button className="hover:bg-white/90 transition-colors bg-white text-black font-medium h-fit py-1.5 px-4 text-sm tracking-wider uppercase">
              Book Now
            </button>
          </Link>
          <HamburgerMenu onClick={() => setShowMenu((bool) => !bool)} />
        </div>
      </nav>
      <MenuBody showMenu={showMenu} setShowMenu={setShowMenu} />
    </>
  );
};
