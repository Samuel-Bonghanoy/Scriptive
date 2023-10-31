import Navbar from "@/components/ui/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:overflow-hidden">
      <Navbar />
      <div className="grid grid-cols-3">
        <div>a</div>
        <div>a</div>
        <div>a</div>
      </div>
    </div>
  );
}
