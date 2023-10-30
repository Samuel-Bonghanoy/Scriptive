import Hero from "@/components/ui/hero";
import Navbar from "@/components/ui/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen items-center justify-between p-24 bg-main">
        <Hero />
        <Image
          src="/heroicon.svg"
          alt="Next.js Logo"
          width={300}
          height={300}
          priority
        />
      </main>
    </>
  );
}
