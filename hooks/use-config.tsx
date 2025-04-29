"use client";
import { createContext, useContext, useEffect, useState } from "react";
// Define available options
export type FontSize = "xs" | "sm" | "base" | "lg" | "xl";
export type Radius = "none" | "sm" | "md" | "lg" | "xl" | "full";

interface ConfigProviderProps {
  children: React.ReactNode;
}

interface ConfigContextType {
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
  radius: Radius;
  setRadius: (radius: Radius) => void;
  animation: boolean;
  setAnimation: (animation: boolean) => void;
  colorThemeScheme: ThemeColors;
  setColorThemeScheme: (scheme: ThemeColors) => void;
  colorTextScheme: TextColors;
  setColorTextScheme: (scheme: TextColors) => void;
}

// Default values for SSR
const defaultConfig: Omit<ConfigContextType, "setFontSize" | "setRadius" | "setAnimation" | "setColorThemeScheme" | "setColorTextScheme"> = {
  fontSize: "base",
  radius: "md",
  animation: true,
  colorThemeScheme: "Default",
  colorTextScheme: "Default"
};

const ConfigContext = createContext<ConfigContextType>({
  ...defaultConfig,
  setFontSize: () => { },
  setRadius: () => { },
  setAnimation: () => { },
  setColorThemeScheme: () => { },
  setColorTextScheme: () => { }
});

export function ConfigProvider({ children }: ConfigProviderProps) {
  // Only access localStorage on client
  const [fontSize, setFontSize] = useState<FontSize>(defaultConfig.fontSize);
  const [radius, setRadius] = useState<Radius>(defaultConfig.radius);
  const [animation, setAnimation] = useState<boolean>(defaultConfig.animation);
  const [colorThemeScheme, setColorThemeScheme] = useState<ThemeColors>(defaultConfig.colorThemeScheme);
  const [colorTextScheme, setColorTextScheme] = useState<TextColors>(defaultConfig.colorTextScheme);
  useEffect(() => {
    // Initialize from localStorage
    const storedFont = window.localStorage.getItem("fontSize") as FontSize;
    const storedRadius = window.localStorage.getItem("radius") as Radius;
    const storedAnim = window.localStorage.getItem("animation");
    const storedThemeScheme = window.localStorage.getItem("colorThemeScheme") as ThemeColors;
    const storedTextScheme = window.localStorage.getItem("colorTextScheme") as TextColors;

    if (storedFont) setFontSize(storedFont);
    if (storedRadius) setRadius(storedRadius);
    if (storedAnim !== null) setAnimation(storedAnim !== "false");
    if (storedThemeScheme) setColorThemeScheme(storedThemeScheme);
    if (storedTextScheme) setColorTextScheme(storedTextScheme);
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    // Font
    root.classList.remove("text-xs", "text-sm", "text-base", "text-lg", "text-xl");
    root.classList.add(`text-${fontSize}`);
    window.localStorage.setItem("fontSize", fontSize);

    // Radius
    const radiusValue =
      radius === "none"
        ? "0"
        : radius === "sm"
          ? ""
          : radius === "md"
            ? "0.5rem"
            : radius === "lg"
              ? "0.75rem"
              : radius === "xl"
                ? "1rem"
                : "9999px";
    root.style.setProperty("--radius", radiusValue);
    window.localStorage.setItem("radius", radius);

    // Animation
    if (!animation) root.classList.add("no-animation");
    else root.classList.remove("no-animation");
    window.localStorage.setItem("animation", String(animation));

    // Color Theme Scheme
    root.setAttribute("data-color-theme-scheme", colorThemeScheme);
    window.localStorage.setItem("colorThemeScheme", colorThemeScheme);

    // Color Text Scheme
    root.setAttribute("data-color-text-scheme", colorTextScheme);
    window.localStorage.setItem("colorTextScheme", colorTextScheme);
  }, [animation, colorThemeScheme, fontSize, radius, colorTextScheme]);

  return (
    <ConfigContext.Provider
      value={{ fontSize, setFontSize, radius, setRadius, animation, setAnimation, colorThemeScheme, setColorThemeScheme, colorTextScheme, setColorTextScheme }}
    >
      {children}
    </ConfigContext.Provider>
  );
}

export const useConfig = (): ConfigContextType => {
  const context = useContext(ConfigContext);
  if (!context) throw new Error("useConfig must be used within ConfigProvider");
  return context;
};
