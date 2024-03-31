import { useState } from "react";

export default function Universe() {
  const [selectedUniverse, setSelectedTimeline] = useState(null);
  const handleClick = (timeline: any) => {
    setSelectedTimeline(timeline === selectedUniverse ? null : timeline);
  };

  return (
    <div className="flex justify-center space-x-4">
      <button
        className={`bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 ${
          selectedUniverse === "past"
            ? "opacity-100"
            : "opacity-15 cursor-not-allowed"
        }`}
        onClick={() => handleClick("past")}
      >
        Space adventure
      </button>
      <button
        className={`bg-green-500 text-white font-bold py-4 px-8 rounded-lg hover:bg-green-700 ${
          selectedUniverse === "present"
            ? "opacity-100"
            : "opacity-15 cursor-not-allowed"
        }`}
        onClick={() => handleClick("present")}
      >
        Pirates
      </button>
      <button
        className={`bg-purple-500 text-white font-bold py-4 px-8 rounded-lg hover:bg-purple-700 ${
          selectedUniverse === "future"
            ? "opacity-100"
            : "opacity-15 cursor-not-allowed"
        }`}
        onClick={() => handleClick("future")}
      >
        Martial arts
      </button>
    </div>
  );
}
