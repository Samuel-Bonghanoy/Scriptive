import Hero from "@/components/ui/hero";
import Navbar from "@/components/ui/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen gap-24 p-[2.5rem] bg-main">
        <Hero />
        <Image
          src="/hero.svg"
          alt="Next.js Logo"
          width={650}
          height={400}
          priority
        />
      </main>
    </>
  );
}
