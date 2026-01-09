import Image from "next/image"


export default function Sidebar() {
  return (
    <aside className="w-1/2 flex justify-center items-center flex-col gap-y-20">
        <div className="flex items-center gap-6">
            <Image src="/headshot.jpeg" alt="Headshot" width={140} height={140} className="rounded-full" />
            <div className="flex flex-col">
                <h1 className="text-5xl font-bold leading-tight">
                    Leonid Alexeyev
                </h1>
                <p className="mt-1 text-lg max-w-xs leading-snug justify-center">
                    M.S. Machine Learning<br />
                    B.S. Computer Science<br />
                    @ Georgia Tech
                </p>
            </div>
        </div>
        <div className="grid grid-rows-2 justify-items-start gap-y-6">
            <span className="text-center text-3xl">About Me</span>
            <span className="text-center text-3xl">Projects</span>
        </div>
        <div className="grid grid-cols-3 gap-10">
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