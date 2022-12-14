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
      const user = { user: response.user, token: response.user.accessToken };
      dispatch(setUser(user));
    } catch (e) {
      console.log(e.message);
    }
  };
};
