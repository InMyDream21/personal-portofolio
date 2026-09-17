"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SiteChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return pathname === "/" ? (
    children
  ) : (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
