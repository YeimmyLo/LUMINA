import Link from "next/link";
import { navItems } from "@/data/site";

type HeaderProps = {
  active?: string;
};

export function Header({ active = "/" }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-[#F5F2ED] bg-[#FFFDF5]/95 shadow-[0_4px_20px_rgba(94,99,68,0.04)] backdrop-blur">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center justify-between gap-3 px-6 py-4 md:h-20 md:flex-row md:px-12 md:py-0">
        <Link href="/" className="font-display text-2xl font-semibold uppercase text-primary-container">
          Lumina
        </Link>
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-display text-xs md:gap-8 md:text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`pb-1 transition-colors ${
                active === item.href
                  ? "border-b-2 border-primary-container text-primary-container"
                  : "text-stone-500 hover:text-primary-container"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
