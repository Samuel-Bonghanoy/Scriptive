import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full flex-col md:overflow-hidden">
      <Navbar theme="yellow" />

      {children}
      <Footer />
    </div>
  );
}
