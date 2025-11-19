"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const darkThemeRoutes = [
  "/pages/about-us",
  "/pages/community",
  "/pages/resources",
];

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    const isDarkRoute = darkThemeRoutes.some((route) =>
      pathname.startsWith(route)
    );

    const root = document.documentElement;
    if (isDarkRoute) {
      root.setAttribute("data-theme", "dark");
    } else {
      root.setAttribute("data-theme", "light");
    }
  }, [pathname]);

  return <>{children}</>;
}
