import { useReducer } from "react";

type State = {
  count: number;
};

type Action = {
  type: "add" | "sub";
};

function reducer(state: State, action: Action): State {
  if (action.type === "add") {
    return { count: state.count + 1 };
  }

  return { count: state.count - 1 };
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h1>{state.count}</h1>

      <button onClick={() => dispatch({ type: "add" })}>
        Add
      </button>

      <button onClick={() => dispatch({ type: "sub" })}>
        Sub
      </button>
    </div>
  );
}