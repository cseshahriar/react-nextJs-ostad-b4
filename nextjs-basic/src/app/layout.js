'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import "./globals.css";
import { useRouter } from 'next-nprogress-bar';

import Menu from "./components/Menu";

export default function RootLayout({ children }) {
  const router = useRouter();

  const goto = () => {
    router.push('/about')
    // router.replace('/about')
    // router.refresh()
    // router.prefetch()
    // router.back()
    // router.forward()
  }

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

        <button onClick={goto}>Click</button>
      </body>
    </html>
  );
}
