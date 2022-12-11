import { useReducer } from "react";

type StateType = {
  count: number;
};

type ActionType = {
  type: "INCREASE" | "DECREASE" | "RESET";
  payload?: number;
};

const initialState: StateType = {
  count: 1,
};

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "INCREASE":
      return {
        count: state.count + 1,
      };
    case "DECREASE":
      return {
        count: state.count - 1,
      };

    case "RESET":
      return {
        count: action.payload || 0,
      };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const reset = () => dispatch({ type: "RESET", payload: 0 });
  const increase = () => dispatch({ type: "INCREASE" });
  const decrease = () => dispatch({ type: "DECREASE" });

  return (
    <main className="Counter">
      <h1>Days Since Last Incident</h1>
      <p className="count">{state.count}</p>
      <section className="controls">
        <button onClick={increase}>Increment</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrease}>Decrement</button>
      </section>
    </main>
  );
};

const Application = () => <Counter />;

export default Application;
