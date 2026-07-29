import { useReducer } from "react";

const initialState = {
  name: "",
  email: "",
  password: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted");
    dispatch({ type: "RESET" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        value={state.name}
        onChange={(e) =>
          dispatch({
            type: "UPDATE",
            field: "name",
            value: e.target.value,
          })
        }
      />

      <br /><br />

      <input
        placeholder="Email"
        value={state.email}
        onChange={(e) =>
          dispatch({
            type: "UPDATE",
            field: "email",
            value: e.target.value,
          })
        }
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        value={state.password}
        onChange={(e) =>
          dispatch({
            type: "UPDATE",
            field: "password",
            value: e.target.value,
          })
        }
      />

      <br /><br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;