import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../config/firebase";
import { getUserData } from "../store/user/thunks";
import { selectUser } from "../store/user/selectors";

export const UserProfile = () => {
  const userId = auth?.currentUser?.uid;
  // console.log("userId", userId);

  const userData = useSelector(selectUser);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserData(userId));
  }, [dispatch, userId]);
  //
  console.log("userData", userData);

  return (
    <div>
      <h2> User Information</h2>
      {userData && (
        <div>
          {" "}
          <div>
            <img src={userData.photoURL} alt="" style={{ width: "200px" }} />
          </div>
          <div>First name : {userData.name}</div>
          <div> Last name : {userData.lastName}</div>
          <div> Email : {userData.email}</div>
        </div>
      )}
    </div>
  );
};
