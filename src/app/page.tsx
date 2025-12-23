"use client";

import React from "react";
import dynamic from "next/dynamic";
import useIsMobile from "@/hooks/useIsMobile";

// Fixed component imports - they were swapped
const Desktop = dynamic(() => import("./pageDesktop"));
const Mobile = dynamic(() => import("./pageMobile"));

export default function Home() {
  const isMobile = useIsMobile();

  return (
    <main className="bg-gray-100">
      {isMobile ? <Mobile /> : <Desktop />}
    </main>
  );
}