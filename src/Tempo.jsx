import { useState, useReducer } from "react";
import "./styles.css";
function Tempo() {
  // const [count, setcount] = useState(0);
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  function reducer(state, action) {
    switch (action.type) {
      case "INC_NUM":
        return {
          count: state.count + 1,
        };
      case "DEC_NUM":
        return {
          count: state.count - 1,
        };
      default:
        throw Error("NO ACTION FOUND");
    }
  }
  return (
    <>
      <div>
        <button
          className="btn"
          onClick={() => {
            dispatch({ type: "DEC_NUM" });
            // setcount(count - 1);
          }}
        >
          -
        </button>
        <button className="btn">{state.count}</button>
        <button
          className="btn"
          onClick={() => {
            dispatch({ type: "INC_NUM" });
            // setcount(count + 1);
          }}
        >
          +
        </button>
      </div>
    </>
  );
}
export default Tempo;
