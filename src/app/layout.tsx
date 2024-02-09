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
    <html lang="en">
      <body>
        <RootProvider>
          <Toaster position="top-right" />
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
