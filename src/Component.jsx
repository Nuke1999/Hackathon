import { useState } from "react";

function Component() {
  const [something, setSomething] = useState("Hello, World!");

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Counter Component</h2>
      <p className="text-lg mb-2">Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
      >
        Increment
      </button>
      <button
        onClick={() => setCount(count - 1)}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Decrement
      </button>
    </div>
  );
}

export default Component;
