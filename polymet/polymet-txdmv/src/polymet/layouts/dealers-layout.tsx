import { ReactNode } from "react";

import Footer from "@/polymet/components/footer";
import Header from "@/polymet/components/header";
import MainNavigation from "@/polymet/components/main-navigation";

export default function DealersLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:p-2 focus:bg-blue-600 focus:text-white focus:z-50"
      >
        Skip to main content
      </a>

      <Header />

      <MainNavigation />

      <main id="main-content" className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
}
