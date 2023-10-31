import Hero from "@/components/ui/hero";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import Stats from "@/components/ui/stats";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar theme="white" />
      <main className="flex flex-col lg:flex-row min-h-screen max-w-screen p-[2.5rem] bg-subyellow shadow-main shadow-md">
        <Hero />
        <div className="lg:ml-[-10rem] mt-6 lg:mt-[-1rem]">
          <Image
            src="/hero.svg"
            alt="Next.js Logo"
            width={720}
            height={400}
            priority
          />
        </div>
      </main>
      <aside className="h-[70vh] flex flex-col gap-10 max-w-screen justify-center items-center">
        <h1 className="text-black text-[2.8rem] font-bold max-w-[71ch] leading-snug">
          Some of Scriptive&apos;s core features
        </h1>
        <Stats />
      </aside>
      <Footer />
    </>
  );
}
