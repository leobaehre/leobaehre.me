'use client'

import React, { useEffect } from 'react';
import "./globals.css";

export default function RootLayout({
  children,
}: React.PropsWithChildren<ob>) {
  // Function to get the theme from local storage or default to system preference
  const getInitialTheme = () => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme;
      }
      const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return prefersDarkScheme ? 'dark' : 'light';
    }
    return 'light';
  };

  // Get the initial theme server-side
  const initialTheme = getInitialTheme();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const theme = savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  }, []);

  return (
    <html lang="en" data-theme={initialTheme}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var theme = localStorage.getItem('theme') || 'light';
                document.documentElement.setAttribute('data-theme', theme);
              })();
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}