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
import Profile from "./Components/UpdateUserProfile/UpdateUserProfile";
import Delete from "./Screens/DeleteRequest/Delete";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<UserScreen />} />
          <Route path="/profile/:id" element={<UserProfile />} /> */}
          <Route path="/Delete" element={<Delete />} />
          {/* <Route path="/" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} /> */}
        </Routes>
      </BrowserRouter>
      {/* <Product /> */}

      {/* <RoughSheet /> */}
    </div>
  );
}

export default App;
