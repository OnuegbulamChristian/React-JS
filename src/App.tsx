import React from "react";
import logo from "./logo.svg";
import "./App.css";
import RoughSheet from "./Components/RoughSheet";
import Product from "./Components/Product/Product";
import Cartitems from "./Components/Product/Cartitems";
import Productlist from "./Components/Product/Productlist";
import UserScreen from "./Screens/UserScreen/UserScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserProfile from "./Screens/UserScreen/UserProfile";
import SignUp from "./Components/SignUpScreen/SignUpScreen";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<UserScreen />} />
          <Route path="/profile/:id" element={<UserProfile />} /> */}
          <Route path="/" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      {/* <Product /> */}

      {/* <RoughSheet /> */}
    </div>
  );
}

export default App;
