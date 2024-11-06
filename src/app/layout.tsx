'use client'

import React, { useEffect } from 'react';
import "./globals.css";

export default function RootLayout({
  children,
}: React.PropsWithChildren<object>) {
  // Function to get the theme from local storage or default to 'light'
  const getInitialTheme = () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  };

  // Get the initial theme server-side
  const initialTheme = getInitialTheme();

  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'light';
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