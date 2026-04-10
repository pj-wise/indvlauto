import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

export const HamburgerMenu = (props: { onClick?: () => void }) => {
  const { onClick } = props;

  return (
    <button onClick={onClick} className="flex items-center justify-center">
      <div className="group flex size-9 cursor-pointer items-center justify-center rounded-md p-1 hover:border-white/30 hover:border">
        <div className="space-y-2">
          <span className="block h-[1px] w-6 origin-center bg-foreground transition-transform ease-in-out group-hover:translate-y-[5px] group-hover:rotate-45"></span>
          <span className="block h-[1px] w-4 origin-center bg-foreground transition-transform ease-in-out group-hover:w-6 group-hover:-translate-y-[5px] group-hover:-rotate-45"></span>
        </div>
      </div>
    </button>
  );
};

export const MenuBody = (props: {
  showMenu: boolean;
  className?: string;
  setShowMenu: (showMenu: boolean) => void;
}) => {
  const { showMenu, setShowMenu } = props;
  const linkClassName =
    "py-5 border-b border-white/10 link hover:text-white/60 transition-colors tracking-wider text-sm font-medium uppercase";
  return (
    <div className="lg:hidden overflow-auto">
      <motion.div
        variants={{
          hidden: { y: "100%", opacity: 0, display: "none" },
          show: { y: 0, opacity: 1, display: "flex" },
        }}
        animate={showMenu ? "show" : "hidden"}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className={cn(
          "flex flex-col z-[999] absolute top-24 left-0 right-0 bottom-0 bg-black text-foreground layoutPadding overflow-y-auto",
          props.className
        )}
      >
        <Link
          href="/"
          className={cn(linkClassName)}
          onClick={() => setShowMenu(false)}
        >
          Home
        </Link>
        <Link
          href="/#about"
          className={cn(linkClassName)}
          onClick={() => setShowMenu(false)}
        >
          About
        </Link>
        <Link
          href="/vehicle-wraps"
          className={cn(linkClassName)}
          onClick={() => setShowMenu(false)}
        >
          Vehicle Wraps
        </Link>
        <Link
          href="/ppf"
          className={cn(linkClassName)}
          onClick={() => setShowMenu(false)}
        >
          Paint Protection Film (PPF)
        </Link>
        <Link
          href="/ceramic-coating"
          className={cn(linkClassName)}
          onClick={() => setShowMenu(false)}
        >
          Paint Correction & Ceramic Coating
        </Link>
        <Link
          href="/window-tint"
          className={cn(linkClassName)}
          onClick={() => setShowMenu(false)}
        >
          Window Tint
        </Link>
        <Link
          href="/commercial"
          className={cn(linkClassName)}
          onClick={() => setShowMenu(false)}
        >
          Commercial Services
        </Link>
        <Link
          href="/#gallery"
          className={cn(linkClassName)}
          onClick={() => setShowMenu(false)}
        >
          Gallery
        </Link>
        <Link
          href="/drop-off"
          className={cn(linkClassName)}
          onClick={() => setShowMenu(false)}
        >
          Drop Off / Pick Up
        </Link>
        <Link
          href="/#contact"
          className={cn(linkClassName)}
          onClick={() => setShowMenu(false)}
        >
          Contact
        </Link>
      </motion.div>
    </div>
  );
};
