"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/context/LanguageContext";

export default function DynamicTitle() {
  const { t } = useTranslation();
  const pathname = usePathname();

  useEffect(() => {
    let title = t.titles.home;

    if (pathname === "/about") title = t.titles.about;
    else if (pathname === "/trade") title = t.titles.trade;
    else if (pathname === "/tourism") title = t.titles.tourism;
    else if (pathname === "/consulting") title = t.titles.consulting;

    document.title = title;
  }, [pathname, t.titles]);

  return null;
}
