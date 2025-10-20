import { Moon, Sun } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-14 w-full flex items-start justify-between">
      {/* Left side: theme toggle icons + copyright */}
      <div className="flex flex-col items-start space-y-4">
        {/* <div className="flex space-x-4">
          <Sun
            size={32}
            weight="regular"
            className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer p-1 rounded-lg hover:bg-muted"
          />
          <Moon
            size={32}
            weight="regular"
            className="text-foreground bg-muted p-1 rounded-lg cursor-pointer"
          />
        </div> */}

        <p className="text-xs text-muted-foreground py-2">
          {" "}
          © Shruti Iyer. All ideas and mistakes are mine.{" "}
        </p>
      </div>

      {/* Right side: social links */}
      <div className="ml-auto flex items-center space-x-2 text-[12px] text-muted-foreground">
        <Link
          href="https://www.linkedin.com/in/shrutiiyer17/"
          target="_blank"
          rel="noreferrer"
          className="px-1.5 py-1 rounded-lg hover:text-foreground transition font-mono uppercase"
        >
          LinkedIn
        </Link>
        <Link
          href="mailto:shrutiiyer17@gmail.com"
          className="px-1.5 py-1 rounded-lg hover:text-foreground transition font-mono uppercase"
        >
          Mail
        </Link>
        <Link
          href="https://www.behance.net/shrutiiyer17"
          target="_blank"
          rel="noreferrer"
          className="px-1.5 py-1 rounded-lg hover:text-foreground transition font-mono uppercase"
        >
          Behance
        </Link>
      </div>
    </footer>
  );
}
