'use client';
import { ReactNode, useEffect, useState } from 'react';
import { ThemeProvider } from "next-themes";

interface ProviderProps {
  children: ReactNode;
}

export default function Provider({children}:ProviderProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }
  return <ThemeProvider attribute='class'>{children}</ThemeProvider>
}