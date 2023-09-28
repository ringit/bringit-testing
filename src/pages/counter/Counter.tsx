import React, { useState } from "react";
import Button from "@/components/Button";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center gap-4">
      <p>Count: {count}</p>
      <div className="flex gap-2">
        <Button onClick={() => setCount((state) => state - 1)}>
          Decrement
        </Button>
        <Button onClick={() => setCount((state) => state + 1)}>
          Increment
        </Button>
      </div>
    </div>
  );
};

export default Counter;
