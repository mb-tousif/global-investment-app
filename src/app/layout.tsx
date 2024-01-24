import "./globals.css";
import type { Metadata } from "next";
import RootProvider from "@/lib/provider";
import { Toaster } from "react-hot-toast";
export const metadata: Metadata = {
  title: "Investment Bank of Bangladesh Ltd",
  description: "Investment Bank of Bangladesh Ltd",
  icons: "/favicon.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RootProvider>
      <html lang="en">
        <body>
          <Toaster position="top-right" />
          {children}
        </body>
      </html>
    </RootProvider>
  );
}
