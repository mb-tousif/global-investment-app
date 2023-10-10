import DashboardNav from "@/components/DashboardNav";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gradient-to-r from-blue-200 to-cyan-200">
      <div className="flex">
        <DashboardNav />
        <div className="flex-grow">{children}</div>
      </div>
    </div>
  );
}