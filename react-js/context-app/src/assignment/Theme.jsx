import { useReducer } from "react";

function reducer(state) {
  return {
    dark: !state.dark,
  };
}

function Theme() {
  const [state, dispatch] = useReducer(reducer, {
    dark: false,
  });

  return (
    <div
      style={{
        height: "100vh",
        background: state.dark ? "black" : "white",
        color: state.dark ? "white" : "black",
        textAlign: "center",
        paddingTop: "50px",
      }}
    >
      <h2>{state.dark ? "Dark Theme" : "Light Theme"}</h2>

      <button onClick={() => dispatch()}>
        Toggle Theme
      </button>
    </div>
  );
}

export default Theme;