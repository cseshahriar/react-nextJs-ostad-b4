'use client';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import "./globals.css";

import Menu from "./components/Menu";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}

        <Menu />
        <ProgressBar
          height="4px"
          color="#fffd00"
          options={{ showSpinner: true }}
          shallowRouting
        />
      </body>
    </html>
  );
}
