import Navbar from "@/components/ui/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-[120vh] flex-col md:overflow-hidden">
      <Navbar />
      <div className="bg-base-300 pb-3 pl-[4%] text-sm text-white font-semibold breadcrumbs overflow-y-hidden ">
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
      <h1 className="pl-[3.5%] bg-subyellow font-bold text-5xl pt-4 text-black tracking-wider uppercase">
        Choose a template
      </h1>
      <div className="grid grid-rows-3 lg:grid-rows-none lg:grid-cols-3 h-full bg-subyellow items-center justify-items-center">
        {children}
      </div>
    </div>
  );
}
