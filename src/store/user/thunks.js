import { setUser, clearUserData } from "./slice";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, db } from "../../config/firebase";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../config/firebase";

//
export const signUp = (email, password, name, lastName, file) => {
  return async (dispatch, get) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      //console.log("sign up response:", response.user);

      // Create a reference with an initial file path and name
      const storageRef = ref(storage, `images/${Date.now() + name}`);

      // Upload the file and metadata
      const uploadTask = uploadBytesResumable(storageRef, file);

      //monitor upload progress
      uploadTask.on(
        (error) => {
          console.log(error.message);
        },
        () => {
          // Handle successful uploads on complete
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            //update user profile
            await updateProfile(user, {
              displayName: name,
              photoURL: downloadURL,
            });

            //store user data in firestore
            await setDoc(doc(db, "users", user.uid), {
              uid: user.uid,
              email: email,
              displayName: name,
              lastName: lastName,
              name: name,
              photoURL: downloadURL,
            });
          });
        }
      );

      const user = response.user;
      const token = user.accessToken;

      // const user = { user: response.user, token: response.user.accessToken };
      dispatch(setUser({ user, token }));
    } catch (e) {
      console.log(e.message);
    }
  };
};

//
export const SignIn = (email, password) => {
  return async (dispatch, getState) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);

      //  console.log("sign In response:", response);
      const user = response.user;
      const token = user.accessToken;
      dispatch(setUser({ user, token }));
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const logout = () => {
  return async (dispatch, getState) => {
    try {
      await signOut(auth);

      dispatch(clearUserData());
    } catch (e) {
      console.log(e.message);
    }
  };
};

// get user data from firestore
export const getUserData = (id) => {
  return async (dispatch, getState) => {
    try {
      const docRef = doc(db, "users", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());

        const userData = docSnap.data();
        const userToken = auth.currentUser.accessToken;

        dispatch(setUser({ user: userData, token: userToken }));
      } else {
        //doc.data() will be undefined in this case
        console.log("No such document!");
      }
    } catch (e) {
      console.log(e.message);
    }
  };
};
