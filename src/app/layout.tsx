import "./globals.css";
import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";

// add metadata for site
export const metadata: Metadata = {
  title: "Leonid Alexeyev",
  description: "Georgia Tech CS grad student focused on machine learning and full stack development.",
};

//root layout which contains sidebar component and main content area (page.tsx)
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="h-screen w-screen overflow-hidden">
        <div className="flex h-full">
          <Sidebar />
          <main id="main-scroll" className="h-screen w-1/2 overflow-y-auto scroll-smooth">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
