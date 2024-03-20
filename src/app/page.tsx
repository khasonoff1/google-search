"use client";

import Header from "@/components/Header";
import { DataType } from "@/components/Modal";
import SearchComponent from "@/components/SearchComponent";
import ShortCut from "@/components/ShortCut";

export default function Home() {
  return (
    <>
      <main className="main min-h-screen min-w-7xl" id="main">
        <Header />
        <SearchComponent />
        <ShortCut />
      </main>
    </>
  );
}
