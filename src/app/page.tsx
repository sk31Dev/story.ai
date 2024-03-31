export default function Home() {
  return (
    <main className="bg-gradient-to-b from-slate-800 to-slate-900 h-screen text-white">
      <div id="time-period">
        <h1>Time Period</h1>
        <button>Ancient</button>
        <button>Modern</button>
        <button>Future</button>
      </div>
      <div>Topics</div>
      <div></div>
      <button>Generate story</button>
    </main>
  );
}
