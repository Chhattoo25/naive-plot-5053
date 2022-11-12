import React from "react";
import { Route, Routes } from "react-router-dom";
import Women from "../pages/WomensPage/Women";
import Beauty from "../components/Beauty_Component/Beauty";
import Men from "../pages/MensPage/Men";
import Cart from "../components/Cart/Cart";
import Admin_home from '../pages/AdminPage/Admin_home'
import WomenProduct from "../pages/WomensPage/WomenProduct";
import MenProduct from "../pages/MensPage/MenProduct";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>Modesens Home page</h1>} />
        <Route path="/womens" element={<Women />} />
        <Route path="/womens/product" element={<WomenProduct />} />
        <Route path="/mens" element={<Men />} />
        <Route path="/mens/product" element={<MenProduct/>} />
        <Route path="/beauty" element={<Beauty />} />
        {/* <Route path='/admin' element={<Admin_home/>}/> */}
        <Route path="/cart" element={<Cart />} />
        
      </Routes>
    </div>
  );
};

export default AllRoutes;
