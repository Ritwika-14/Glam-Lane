import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceHolder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";

const App = () => {

 const[showLogin,setshowLogin] = useState(false)

  return (
    <>
    {showLogin?<Login setshowLogin={setshowLogin} />:<></>}
      <div className="app">
        <Navbar setshowLogin={setshowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceHolder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
