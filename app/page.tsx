import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image
        className="border-black border-2 transition-all duration-[30] hover:scale-[1.03] hover:bg-maindark hover:border-l-[6px] hover:border-b-[6px] rounded-md"
        src="/heroicon.svg"
        alt="Next.js Logo"
        width={300}
        height={300}
        priority
      />
    </main>
  );
}
