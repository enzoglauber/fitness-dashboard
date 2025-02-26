import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/providers/theme.provider";


export function ToggleTheme() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="cursor-pointer hover:bg-green-400 dark:hover:bg-yellow-300"
    >
      <Sun className="h-[1.5rem] w-[1.3rem] dark:hidden" color="#000" />
      <Moon className="hidden h-5 w-5 dark:block dark:text-white cursor-pointer" color="#fff" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}