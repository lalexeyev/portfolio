"use client";

import Image from "next/image"
import { useRouter, usePathname } from "next/navigation";

// function to scroll to section
function scroll(id: string) {
    // scroll within right container, to the correct element
    const container = document.getElementById("main-scroll");
    const element = document.getElementById(id);

    if (!container || !element) return;

    // set the new id as the top of the screen
    container.scrollTo({
        top: element.offsetTop, // pad same as container
        behavior: "smooth",
    })

    // update the url hash
    window.location.hash = id;
}

// sidebar component which always persists on the left side of the webpage
export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const isHome = pathname === "/";

  // address firefox bug by checking if on home page before scrolling, otherwise navigate to home page
  const handleNavigation = (sectionId: string) => {
    if (isHome) {
      scroll(sectionId);
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  return (
    // include logic for high zoom, add a scrollable if thats the case, use rtl and ltr swap to have scroll on left
    <aside className="w-1/2 flex justify-center items-center flex-col gap-y-20 pt-16 pb-16 px-10 h-screen overflow-y-auto [direction:rtl]">
        {/* header with name, degree, and picture */}
        <div className="flex items-center gap-6 [direction:ltr]">
            <Image src="/headshot.jpeg" alt="Headshot" width={140} height={140} className="rounded-full" />
            <div className="flex flex-col">
                <h1 className="text-5xl font-bold leading-tight">
                    Leonid Alexeyev
                </h1>
                <p className="mt-1 text-lg max-w-xs leading-snug justify-center">
                    M.S. Machine Learning<br />
                    B.S. Computer Science<br />
                    @ Georgia Tech🐝
                </p>
            </div>
        </div>
        {/* navigational links using hashes */}
        <div className="grid grid-rows-2 justify-items-start gap-y-6">
            <a href="#" onClick={(e) => {e.preventDefault(); handleNavigation("about");}} className="text-center text-3xl hover:underline">About Me</a>
            <a href="#" onClick={(e) => {e.preventDefault(); handleNavigation("projects");}} className="text-center text-3xl hover:underline">Projects</a>
        </div>
        {/* github, linkedin, resume links */}
        <div className="grid grid-cols-3 gap-10 [direction:ltr]">
            <a href="https://github.com/lalexeyev" target="_blank" rel="noopener noreferrer">
                <Image src="/github.svg" alt="GitHub" width={40} height={40} />
            </a>
            <a href="https://www.linkedin.com/in/leonid-alexeyev/" target="_blank" rel="noopener noreferrer">
                <Image src="/linkedin.svg" alt="LinkedIn" width={40} height={40} />
            </a>
            <a href="/Alexeyev_Leonid.pdf" target="_blank" rel="noopener noreferrer">
                <Image src="/resume.svg" alt="Resume" width={40} height={40} />
            </a>
        </div>
    </aside>
    );
}