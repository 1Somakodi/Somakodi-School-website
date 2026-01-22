"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.gtag) return;

    const url =
      pathname + (searchParams.toString() ? `?${searchParams.toString()}` : "");

    window.gtag("config", "G-0R04CN5RGD", {
      page_path: url,
    });
  }, [pathname, searchParams]);

  return null;
}
