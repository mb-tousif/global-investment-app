import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function RootPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gradient-to-r from-slate-300 to-slate-500">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
