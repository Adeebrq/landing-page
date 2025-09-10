"use client";
import { WavyBackground } from "../components/ui/wavy-background";
import Lanyard from '../components/Lanyard';
import { Suspense, useMemo } from "react";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();

  const name = useMemo(() => {
    const nameParam = searchParams.get("name");
    return nameParam ? nameParam.trim().toLowerCase() : null;
  }, [searchParams]);

  const targetUrl = useMemo(() => {
    return name ? `https://${name}.cruxcreations.com/` : null;
  }, [name]);

  return (
    <Suspense fallback={null}>
      <div>
        <WavyBackground className="w-full h-screen flex items-center justify-center flex-col px-4">
          <h1 className="z-60 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-purple-200 py-2 -mt-16 sm:mt-6 md:mt-10 text-2xl sm:text-3xl md:text-4xl font-bold text-center drop-shadow-lg max-w-4xl">
            Your Portfolio Website is Ready!
          </h1>
          
          <a 
            href="https://www.cruxcreations.com" 
            className="
              z-60 
              text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-100
              hover:from-blue-300 hover:to-purple-300
              text-xs sm:text-sm 
              font-medium
              transition-all duration-300 
              hover:scale-105 
              cursor-pointer
              drop-shadow-md
              hover:drop-shadow-lg
              mt-2
            "
            target="_blank" 
            rel="noopener noreferrer"
          >
            Powered by Crux Creations
          </a>

          <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
          
          <a
            href={targetUrl ?? undefined}
            target={targetUrl ? "_blank" : undefined}
            rel={targetUrl ? "noopener noreferrer" : undefined}
            aria-disabled={!targetUrl}
            className={`
              z-10 
              px-4 py-2 sm:px-6 sm:py-3
              rounded-full
              bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600
              text-white font-semibold
              text-sm sm:text-base
              shadow-inner shadow-orange-700/40
              hover:shadow-orange-700/60
              hover:scale-105
              hover:from-orange-300 hover:via-orange-400 hover:to-orange-500
              active:scale-95
              transition-all duration-300 ease-in-out
              transform
              -translate-y-4 sm:-translate-y-20 md:-translate-y-28
              mx-4
              max-w-xs sm:max-w-none
            ${!targetUrl ? " pointer-events-none opacity-60" : " cursor-pointer"}`}
          >
            <span className="block sm:hidden">View Portfolio</span>
            <span className="hidden sm:block">View Your Portfolio Website</span>
          </a>
        </WavyBackground>
      </div>
    </Suspense>
  );
}