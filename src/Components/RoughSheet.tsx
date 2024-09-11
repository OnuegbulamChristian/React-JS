import { log } from "console";
import React, { useState } from "react";

const RoughSheet = () => {
  const [show, setShow] = useState("Register");
  //   console.log(show);
  const handleClick = () => {
    setShow("Loading...");
  };
  return (
    <div>
      <button onClick={handleClick}>{show}</button>
    </div>
  );
};

export default RoughSheet;
