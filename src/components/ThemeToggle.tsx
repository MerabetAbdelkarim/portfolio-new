import React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "./theme-provider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  
  // Calculate if dark mode is active (either explicitly set or by system preference)
  const isDark = 
    theme === "dark" || 
    (theme === "system" && typeof window !== 'undefined' && window.matchMedia("(prefers-color-scheme: dark)").matches)

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-2 glass rounded-full hover:bg-slate-200/50 dark:hover:bg-white/10 dark:text-gray-300 text-slate-700 hover:text-slate-900 transition-all duration-300 hover:scale-110 flex items-center justify-center focus:outline-none"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun className="w-5 h-5 text-gray-300 hover:text-white" /> : <Moon className="w-5 h-5 text-slate-700 hover:text-slate-900" />}
    </button>
  )
}
