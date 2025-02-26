import { ToggleTheme } from "@/components/toogle-theme";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sticky = window.scrollY > 80
      setIsSticky(sticky);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`transition-all duration-300 shadow-sm bg-gray-100 dark:bg-gray-900 ${isSticky ? "fixed top-0 left-0 w-full z-50" : ""}`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        <div>
          <a href="/" className="text-2xl font-bebas-neue">
            Fitness - Dashboard
          </a>
        </div>
        <div className="flex lg:flex-1">
          <div className="lg:flex lg:flex-1 lg:justify-end">
            <ToggleTheme />
          </div>
        </div>
      </nav>
    </header>
  );
};
