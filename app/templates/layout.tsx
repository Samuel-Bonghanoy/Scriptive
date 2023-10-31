import Navbar from "@/components/ui/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:overflow-hidden">
      <Navbar />
      <div className="bg-subyellow pl-[4rem] text-sm breadcrumbs">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Documents</a>
          </li>
          <li>Add Document</li>
        </ul>
      </div>
      <h1 className="bg-subyellow text-black text-[2.8rem] font-bold max-w-[71ch] leading-snug">
        Choose a template
      </h1>
      <div className="grid grid-cols-3 h-full bg-subyellow items-center justify-items-center">
        {children}
      </div>
    </div>
  );
}
