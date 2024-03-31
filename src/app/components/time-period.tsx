import { useState } from "react";

export default function TimePeriod() {
  const [selectedTimeline, setSelectedTimeline] = useState(null);
  const handleClick = (timeline: any) => {
    setSelectedTimeline(timeline === selectedTimeline ? null : timeline);
  };

  return (
    <div className="flex justify-center space-x-4">
      <button
        className={`bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 ${
          selectedTimeline === "past"
            ? "opacity-100"
            : "opacity-25 cursor-not-allowed"
        }`}
        onClick={() => handleClick("past")}
      >
        Past
      </button>
      <button
        className={`bg-green-500 text-white font-bold py-4 px-8 rounded-lg hover:bg-green-700 ${
          selectedTimeline === "present"
            ? "opacity-100"
            : "opacity-15 cursor-not-allowed"
        }`}
        onClick={() => handleClick("present")}
      >
        Present
      </button>
      <button
        className={`bg-purple-500 text-white font-bold py-4 px-8 rounded-lg hover:bg-purple-700 ${
          selectedTimeline === "future"
            ? "opacity-100"
            : "opacity-15 cursor-not-allowed"
        }`}
        onClick={() => handleClick("future")}
      >
        Future
      </button>
    </div>
  );
}
