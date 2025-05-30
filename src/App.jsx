import { useState, useEffect, useRef, useReducer, useCallback } from "react";
import Counter from "./Counter";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

function App() {
  // useState manages local component state
  const [name, setName] = useState("Guest");

  // useEffect runs after render (e.g., fetching or updating DOM)
  useEffect(() => {
    console.log("Component mounted or name changed:", name);
  }, [name]);

  // useRef allows you to persist a mutable value across renders
  const inputRef = useRef(null);

  // useReducer manages complex state logic
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  // useCallback memoizes the function to prevent re-creation on each render
  const alertName = useCallback(() => {
    alert(`Hello, ${name}`);
  }, [name]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-6 p-4">
      <h1 className="text-3xl font-bold text-blue-600">React Hooks Example</h1>

      <input
        ref={inputRef}
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="px-4 py-2 border rounded shadow"
      />

      <button
        onClick={() => inputRef.current.focus()}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Focus Input (useRef)
      </button>

      <button
        onClick={alertName}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Greet (useCallback)
      </button>

      <div className="text-xl font-semibold">
        useReducer Count: {state.count}
      </div>
      <div className="flex gap-4">
        <button
          onClick={() => dispatch({ type: "increment" })}
          className="bg-purple-500 text-white px-4 py-2 rounded"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch({ type: "decrement" })}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Decrement
        </button>
      </div>

      <Counter />
    </div>
  );
}

export default App;
