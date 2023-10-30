import Hero from "@/components/ui/hero";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col lg:flex-row min-h-screen max-w-screen p-[2.5rem] bg-subyellow">
        <Hero />
        <div className="lg:ml-[-10rem] mt-6 lg:mt-[-1rem]">
          <Image
            src="/hero.svg"
            alt="Next.js Logo"
            width={670}
            height={400}
            priority
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
