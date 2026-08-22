import React, { useState } from "react";

export default function App(): React.JSX.Element {
  const [count, setCount] = useState<number>(0);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Vite + Express + TypeScript</h1>
      <p>Your client-side components are fully type-safe.</p>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Clicks: {count}
      </button>
    </div>
  );
}
