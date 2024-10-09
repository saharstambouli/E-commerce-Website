import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  // State to track whether to show the signup or login form
  const [isSignup, setIsSignup] = useState(true);

  // Toggle between signup and login
  const toggleForm = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg flex w-3/4 max-w-4xl">
        {/* First column: Image */}
        <div className="w-1/2">
          <img
            src="/top.jpg" 
            alt="Signup illustration"
            className="object-cover w-full h-full rounded-l-lg"
          />
        </div>

        {/* Second column: Form */}
        <div className="w-1/2 p-8 flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            {isSignup ? 'Sign Up' : 'Login'}
          </h2>

          <form className="w-full">
            {isSignup && (
              <>
                <div className="flex flex-col mb-4 w-3/4">
                  <label className="block text-gray-700 font-semibold mb-2" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"
                    placeholder="Enter your first name"
                  />
                </div>

                <div className="flex flex-col mb-4 w-3/4">
                  <label className="block text-gray-700 font-semibold mb-2" htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"
                    placeholder="Enter your last name"
                  />
                </div>

                <div className="flex flex-col mb-4 w-3/4">
                  <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-4 w-3/4">
                  <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"
                    placeholder="Enter your password"
                  />
                </div>

                <div className="mb-6 w-3/4">
                  <label className="block text-gray-700 font-semibold mb-2" htmlFor="confirmPassword">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"
                    placeholder="Confirm your password"
                  />
                </div>
              </>
            )}

            {!isSignup && (
              <>
                <div className="flex flex-col mb-4 w-3/4">
                  <label className="block text-gray-700 font-semibold mb-2" htmlFor="loginEmail">
                    Email
                  </label>
                  <input
                    type="email"
                    id="loginEmail"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-6 w-3/4">
                  <label className="block text-gray-700 font-semibold mb-2" htmlFor="loginPassword">
                    Password
                  </label>
                  <input
                    type="password"
                    id="loginPassword"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"
                    placeholder="Enter your password"
                  />
                </div>
              </>
            )}

            <button
              type="submit"
              className="w-3/4 bg-indigo-500 text-white font-semibold py-3 rounded-lg hover:bg-indigo-600 transition duration-200"
            >
              {isSignup ? 'Sign Up' : 'Login'}
            </button>
          </form>

          {/* Below the form toggle link */}
          <div className="mt-6 text-center">
            <p className="text-gray-700">
              {isSignup ? 'Already have an account?' : "Don't have an account?"}
            </p>
            <Link
              to="#"
              onClick={toggleForm}
              className="text-decoration-none font-bold hover:text-gray-400"
              style={{ color: "#B88E2F" }}
            >
              {isSignup ? 'Login' : 'Sign Up'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
