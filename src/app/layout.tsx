import "./globals.css";
import Sidebar from "@/components/Sidebar";

//root layout which contains sidebar component and main content area (page.tsx)
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="h-screen w-screen overflow-hidden">
        <div className="flex h-full">
          <Sidebar />
          <main className="w-1/2 overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
