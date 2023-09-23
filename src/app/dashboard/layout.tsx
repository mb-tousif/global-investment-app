import Footer from "@/components/Footer";
import SideNavbar from "./SideNavbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#e0dadad5]">
      <div className="flex">
        <SideNavbar />
        <div className="flex-grow">{children}</div>
      </div>
    </div>
  );
}