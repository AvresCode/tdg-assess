import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../config/firebase";
import { getUserData } from "../store/user/thunks";
import { selectUser } from "../store/user/selectors";
import "./UserProfile.css";

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
    <div className="user-profile-container">
      <h2> User Information</h2>
      {userData && (
        <div>
          {" "}
          <div>
            <img src={userData.photoURL} alt="" />
          </div>
          <div className="user-data">First name : {userData.name}</div>
          <div className="user-data"> Last name : {userData.lastName}</div>
          <div className="user-data"> Email : {userData.email}</div>
        </div>
      )}
    </div>
  );
};
