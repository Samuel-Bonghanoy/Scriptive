import Hero from "@/components/ui/hero";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import Stats from "@/components/ui/stats";
import Image from "next/image";

export default async function Home() {
  return (
    <>
      <Navbar theme="white" />
      <main className="flex transition-all duration-200 flex-col justify-center gap-10 lg:flex-row min-h max-w-screen pb-[4.5rem] pt-[2rem] px-[2rem] bg-subyellow shadow-main shadow-md">
        <Hero />

        <div className="h-[80%] w-[60%] flex justify-center bg-mainwhite border-[3px] hover:bg-pink text-xl border-black px-2 py-3 rounded-md text-black font-bold transition-all duration-[30] hover:scale-[1.01] hover:border-l-[7px] hover:border-b-[7px]">
          <Image
            src="/hero.svg"
            alt="Scriptive Graphic"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "90%", height: "auto" }} // optional
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
