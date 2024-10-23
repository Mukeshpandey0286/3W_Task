import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="flex grainy-light flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        Welcome to Social Media Website
      </h1>
      <div className="flex gap-10">
        <Link
          to="/submit"
          className="text-lg font-semibold text-blue-600 hover:underline border border-gray-700 rounded-lg p-4 py-2"
        >
          Submit Form
        </Link>
        <Link
          to="/admin-login"
          className="text-lg font-semibold text-blue-600 hover:underline border border-gray-700 rounded-lg p-4 py-2"
        >
          Admin Login
        </Link>
      </div>
    </div>
  );
};

export default Landing;
