import DashboardNav from "@/components/DashboardNav";
import Footer from "@/components/Footer";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#e0dadad5]">
      <div className="flex">
        <DashboardNav />
        <div className="flex-grow">{children}</div>
      </div>
    </div>
  );
}