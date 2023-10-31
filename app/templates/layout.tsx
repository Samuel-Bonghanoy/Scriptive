import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-[130vh] flex-col md:overflow-hidden">
      <Navbar theme="yellow" />
      <div className="bg-slate-50 pb-3 pl-[3%] text-sm text-black font-semibold breadcrumbs overflow-y-hidden ">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Templates</a>
          </li>
        </ul>
      </div>
      {children}
      <Footer />
    </div>
  );
}
