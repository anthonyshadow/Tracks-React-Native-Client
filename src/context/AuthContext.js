import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    // make api request to sign up with email and password
    //if we signup modify our state and say we are authenticated
    // if sign up fails, reflect an error message

    try {
      const response = await trackerApi.post("/signup", { email, password });
      console.log(response.data);
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign up",
      });
    }
  };
};

const signin = (dispatch) => {
  return ({ email, password }) => {
    // try to sign in
    // handle success by updating state
    // handle failure by showing error message
  };
};

const signout = (dispatch) => {
  return () => {};
};

export const { Provider, Context } = createDataContext(
  AuthReducer,
  { signin, signup, signout },
  { isSignedIn: false, errorMessage: "" }
);
