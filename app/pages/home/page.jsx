"use client";

import { Header } from "../../components/header";

export default function Page() {
  return (
    <div>
      <header className="bg-[#141414] w-full flex flex-row items-center justify-center">
        <Header />
      </header>
      <main className="flex min-h-screen flex-col bg-[#141414]">home page</main>
    </div>
  );
}
