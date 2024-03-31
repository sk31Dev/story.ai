"use client";
import TimePeriod from "./components/time-period";
import Universe from "./components/universe";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-slate-800 to-slate-900 h-screen text-white">
      <div className="h-screen flex flex-col items-center justify-top">
        <h1 className="text-6xl font-bold mb-8">Select Timeline</h1>
        <TimePeriod />
        <br></br>
        <h1 className="text-6xl font-bold mb-8">Select Universe</h1>
        <Universe />
      </div>
    </main>
  );
}
