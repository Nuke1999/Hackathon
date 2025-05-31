import { ReactNode } from "react";
import Footer from "@/polymet/components/footer";

interface EventsLayoutProps {
  children: ReactNode;
}

export default function EventsLayout({ children }: EventsLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header placeholder - out of scope according to requirements */}
      <div className="bg-blue-700 text-white p-4 text-center">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm">Header area (out of scope)</p>
        </div>
      </div>

      {/* Main content */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 py-6">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
