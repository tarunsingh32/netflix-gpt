import React, { useEffect } from "react";
import { auth } from "../Utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { LOGO, Supported_lang } from "../Utils/constants";
import { toggleGptSearchView } from "../Utils/gptSearchSlice";
import { changeLang } from "../Utils/configSlice";
import lang from "../Utils/langChange";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const languageKey = useSelector((store)=> store.config.lang);


  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Optionally add some sign-out logic
      })
      .catch((error) => {
        navigate("/error");
      });
  };

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
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unSubscribe();
  }, []);

  const handleToggleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange =(e)=>{
    dispatch(changeLang(e.target.value));
  }

  return (
    <div className="fixed w-full px-12 py-2 bg-gradient-to-b from-black to-transparent z-50 flex justify-between items-center">
      <img className="w-36" src={LOGO} alt="logo" />
      {user && (
        <div className="flex items-center space-x-4">
          {showGptSearch && <select className="bg-gray-500 text-white rounded-sm" onChange={handleLanguageChange}>
            {Supported_lang.map((lang) => (
              <option key={lang.identifiers} value={lang.identifiers}>
                {lang.name}
              </option>
            ))}
          </select>}
          <button
            className="py-2 px-4 mx-4 my-2 bg-slate-600 text-white rounded-lg"
            onClick={handleToggleGptSearchClick}
          >
           {showGptSearch ? lang[languageKey].home :" GPT Search"}
          </button>
          <img
            className="w-12 h-12 rounded-full"
            src={user.photoURL}
            alt="userIcon"
          />
          <button
            onClick={handleSignOut}
            className="font-bold text-lg text-white hover:text-gray-300 transition duration-300"
          >
           {showGptSearch ? lang[languageKey].signOut : "Sign Out"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
