import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
import StyleIcon from "@mui/icons-material/Style";

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
      <h1 className="pl-[2.5%] bg-slate-50 font-bold text-5xl py-2 mb-2 text-black tracking-wider uppercase flex items-center">
        Choose a template{" "}
        <StyleIcon
          sx={{
            width: "4rem",
            height: "3rem",
            fill: "#000000",
            "&:hover": { fill: "#FFC24A" },
          }}
        />
      </h1>
      <div className="grid grid-rows-3 lg:grid-rows-none lg:grid-cols-3 h-full bg-subyellow items-center justify-items-center">
        {children}
      </div>
      <Footer />
    </div>
  );
}
