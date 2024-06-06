import React, { useEffect } from "react";
import { auth } from "../Utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { LOGO } from "../Utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store)=>store.user);
  const handleSignOut =()=>{
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate("/error");
    });
  }
 
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
          navigate("/browse")
        );
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Unsubscribe when Components Unmounts
     return () => unSubscribe();
  }, []);


  return (
    <div className="absolute w-screen px-12 py-4 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src={LOGO}
        alt="logo"
      />
      { user && <div className="flex p-2">
        <img className="w-12 h-12 m-4"
        src={user?.photoURL} alt="userIcon" />
      <button onClick={handleSignOut} className="font-bold text-lg text-white">(Sign Out)</button>
      </div>}
    </div>
  );
};

export default Header;
