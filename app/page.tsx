import Hero from "@/components/ui/hero";
import Navbar from "@/components/ui/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col lg:flex-row min-h-screen max-w-screen p-[2.5rem] bg-subyellow">
        <Hero />
        <div>
          <Image
            src="/hero.svg"
            alt="Next.js Logo"
            width={650}
            height={400}
            priority
          />
        </div>
      </main>
    </>
  );
}
