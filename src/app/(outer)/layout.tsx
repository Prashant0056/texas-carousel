"use client";
import React from "react";
import { Nav } from "@/components/nav-outer";
import { Toaster } from "@/components/ui/toaster";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Display from "./display/page";

export default function Layout({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  return (
      <main className="max-w-[1300px] mx-auto">{children}</main>
      
      
  );
}
