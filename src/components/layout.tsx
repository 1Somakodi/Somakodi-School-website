"use client";

import Navbar from "@/components/navbar";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="pt-20">{children}</main>
    </>
  );
}
