import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Fragment } from "react";

export default function RootPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Fragment>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </Fragment>
  );
}
