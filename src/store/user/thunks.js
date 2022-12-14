import { setUser } from "./slice";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../../config/firebase";
import { setDoc, doc } from "firebase/firestore";
//
export const signUp = (email, password, name, lastName) => {
  return async (dispatch, get) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("sign up response:", response.user);
      // const user = { user: response.user, token: response.user.accessToken };
      const user = response.user;
      const token = user.accessToken;
      dispatch(setUser({ user, token }));

      //update user profile
      await updateProfile(user, { displayName: name });

      //store user data in firestore
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email: email,
        displayName: name,
        lastName: lastName,
        name: name,
      });
    } catch (e) {
      console.log(e.message);
    }
  };
};
