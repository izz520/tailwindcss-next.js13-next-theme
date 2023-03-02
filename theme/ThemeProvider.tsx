"use client";

import React, { ReactNode } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children }: { children: ReactNode }) {
    return <NextThemesProvider attribute="class">{children}</NextThemesProvider>;
}