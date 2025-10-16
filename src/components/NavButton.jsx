"use client";
import Link from "next/link";

const NavButton = ({ href, label }) => {
  return (
    <Link
      href={href}
      className="group relative flex items-center justify-center md:h-24 h-10 rounded-lg md:rounded-2xl bg-[#272954] border border-white/30 backdrop-blur-md text-white md:text-3xl text-lg font-semibold uppercase tracking-wide shadow-lg hover:bg-white/20 hover:scale-[1.02] transition-all duration-300"
    >
      <span className="z-10  md:text-3xl">{label}</span>
      <div className="absolute inset-0 rounded-lg md:rounded-2xl bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </Link>
  );
};

export default NavButton;
