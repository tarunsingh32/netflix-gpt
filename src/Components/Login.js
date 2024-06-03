import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignInFrom = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/86742114-c001-4800-a127-c9c89ca7bbe4/IN-en-20240527-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-md opacity-85">
        <h1 className="text-3xl font-bold py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn &&
          <input
          type="text"
          placeholder="Full Name"
          className="p-2 my-4 w-full bg-gray-700 "
        />
        }
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-4 w-full bg-gray-700 "
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-700 "
        />
        <button className="p-4 my-6 w-full bg-red-600 rounded-lg">
        {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInFrom}>
          {isSignIn
            ? "New to Netflix? SignUp Now"
            : "Already registered?SignIn Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
