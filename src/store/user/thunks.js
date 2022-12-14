import { setUser } from "./slice";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";

//
export const signUp = (email, password) => {
  return async (dispatch, get) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("sign up response:", response);
      dispatch(setUser(response.user));
    } catch (e) {
      console.log(e.message);
    }
  };
};
