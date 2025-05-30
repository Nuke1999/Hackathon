import { useState, useEffect } from "react";

// Simple counter to demonstrate useState and useEffect
export default function Counter() {
  const [count, setCount] = useState(0);

  // This effect runs only on initial mount
  useEffect(() => {
    console.log("Counter component mounted");
  }, []);

  return (
    <div className="text-center mt-8">
      <div className="text-xl">Basic Counter (useState)</div>
      <div className="text-2xl font-bold">{count}</div>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-indigo-600 text-white px-4 py-2 rounded mt-2"
      >
        Increment
      </button>
    </div>
  );
}
