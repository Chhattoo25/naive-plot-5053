import React from "react";
import { Route, Routes } from "react-router-dom";
import Women from "../pages/WomensPage/Women";
import Beauty from "../components/Beauty_Component/Beauty";
import Cart from "../components/Cart/Cart";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/women" element={<Women />} />
        <Route path="/beauty" element={<Beauty />} />
        {/* <Route path='/admin' element={<Admin_home/>}/> */}
        <Route path="/cart" element={<Cart />} />
        
      </Routes>
    </div>
  );
};

export default AllRoutes;
