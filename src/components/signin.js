import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    }
  };

  return (
    <div className="signin">
      <div className="border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
        {error !== null && (
          <div className="py-4 bg-red-600 w-full text-white text-center mb-3">
            {error}
          </div>
        )}
        <form className="text-center">
          <p>Sign in to your account.</p>
          <p>
            <input
              type="email"
              className="my-1 p-1 w-full"
              name="userEmail"
              value={email}
              placeholder="Email address"
              id="userEmail"
              onChange={(event) => onChangeHandler(event)}
            />
          </p>
          <p>
            <input
              type="password"
              className="mt-1 mb-3 p-1 w-full"
              name="userPassword"
              value={password}
              placeholder="Password"
              id="userPassword"
              onChange={(event) => onChangeHandler(event)}
            />
          </p>
          <button
            className="bg-green-400 hover:bg-green-500 w-full py-2 text-white"
            onClick={(event) => {
              signInWithEmailAndPasswordHandler(event, email, password);
            }}
          >
            Sign in
          </button>
        </form>

        <p className="text-center my-3">
          Don't have an account?{" "}
          <Link
            to="createaccount"
            className="text-blue-500 hover:text-blue-600"
          >
            Sign up here
          </Link>{" "}
          <br />{" "}
        </p>
      </div>
    </div>
  );
};
export default SignIn;
