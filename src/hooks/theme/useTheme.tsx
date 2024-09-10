"use client";
import { useTheme } from "next-themes";

export const useThemeMode = () => {
  const { setTheme, theme , resolvedTheme } = useTheme();

  return {
    setTheme,
    theme,
    resolvedTheme
  };
};
