import { useRef } from "react";

export default function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClick() {
    alert(inputRef.current?.value);
  }

  return (
    <div>
      <input ref={inputRef} type="text" />

      <button onClick={handleClick}>
        Show Value
      </button>
    </div>
  );
}