"use client";

import { Header } from "../components/Header";

export default function SpeakersPage() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-[#141414]">
      <header className="bg-[#141414] w-full flex flex-row items-center justify-center">
        <Header />
      </header>
      <main className="text-white p-8">
        <h1 className="text-4xl font-bold mb-4">SPEAKERS</h1>
        <p className="text-gray-300">Browse our collection of premium speakers</p>
      </main>
    </div>
  );
}