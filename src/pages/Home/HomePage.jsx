import React from "react";
import { Background } from "../../assets/data";
import UserDetailsSubmit from "../../components/forms/UserDetailsSubmit";

const HomePage = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Background})` }}
      className="h-screen w-screen flex items-center justify-center"
    >
      <UserDetailsSubmit />
    </div>
  );
};

export default HomePage;
