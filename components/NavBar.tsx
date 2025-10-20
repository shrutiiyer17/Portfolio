"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Moon, Sun } from "@phosphor-icons/react/dist/ssr";

export default function Navbar() {
  const pathname = usePathname();
  const getNavItemClass = (href: string) => {
    const base = "px-1.5 py-1 rounded-lg transition";
    const isActive = pathname === href;
    return isActive ? `${base} bg-muted text-foreground` : `${base} hover:text-foreground`;
  };
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 font-normal text-sm text-muted-foreground"
      style={{ background: "linear-gradient(to bottom, #0A0A0A, transparent)" }}
    >
      {/* Left side (Logo + Links) */}
      <div className="flex items-center justify-between gap-[4px] space-x-2">
        <Link href="/">
          <Image src="/LOGO.png" alt="My photo" width={18} height={18} />
        </Link>

        <Link href="/" className={getNavItemClass("/")}>
          Work
        </Link>
        {/* <Link
          href="/about"
          className="px-1.5 py-1 rounded-lg hover:text-foreground transition"
        >
          About
        </Link> */}
        {/* <Link
          href="/art"
          className={getNavItemClass("/art")}
        >
          Art
        </Link> */}
      </div>

      {/* Removed vertical divider lines */}

      {/* Right side (Social links) */}
      {/* <div className="flex space-x-2">
        <div className="relative group">
          <Sun
            size={28}
            weight="fill"
            className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer p-[6px] rounded-lg hover:bg-muted"
          />
          <div className="absolute right-full top-1/2 transform -translate-y-1/2 mr-1 px-2 py-1 text-xs text-muted-foreground rounded opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap translate-x-2 group-hover:translate-x-0">
            Light mode coming soon!
          </div>
        </div>
        <Moon
          size={28}
          weight="fill"
          className="text-foreground bg-muted p-[6px] rounded-lg cursor-pointer"
        />
      </div> */}
      {/* <div className="flex items-center space-x-2">
        <Link
          href="https://linkedin.com"
          target="_blank"
          className="px-1.5 py-1 rounded-lg hover:text-foreground transition"
        >
          LinkedIn
        </Link>
        <Link
          href="https://behance.net"
          target="_blank"
          className=" px-1.5 py-1 rounded-lg hover:text-foreground transition"
        >
          Behance
        </Link>
        <Link
          href="https://github.com"
          target="_blank"
          className="px-1.5 py-1 rounded-lg hover:text-foreground transition"
        >
          GitHub
        </Link>
      </div> */}

      {/* Removed vertical divider lines */}
    </nav>
  );
}
