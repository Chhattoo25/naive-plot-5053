import React from "react";
import { Route, Routes } from "react-router-dom";
import Women from "../pages/WomensPage/Women";
import Beauty from "../components/Beauty_Component/Beauty";
import Men from "../pages/MensPage/Men";
import Cart from "../components/Cart/Cart";
import Header from '../Header'

import Adminupdateproduct from "../pages/AdminPage/Adminupdateproduct";

import Admin_home from '../pages/AdminPage/Admin_home'
import WomenProduct from "../pages/WomensPage/WomenProduct";
import MenProduct from "../pages/MensPage/MenProduct";
import Body from "../pages/Navbar/Body";


const AllRoutes = () => {
  return (
    <div>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Body/>} />
=======
        <Route path="/" element={<h1>Modesens Home page</h1>} />
        <Route path="/navbar" element={<Header/>} />
>>>>>>> e2251649f7cacc5851678e92ca5097107d980083
        <Route path="/womens" element={<Women />} />
        <Route path="/womens/product" element={<WomenProduct />} />
        <Route path="/mens" element={<Men />} />
        <Route path="/mens/product" element={<MenProduct/>} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path='/admin' element={<Admin_home/>}/>
        <Route path='/updateproduct/:id' element={<Adminupdateproduct/>}/>
        <Route path="/cart" element={<Cart />} />
        
      </Routes>
    </div>
  );
};

export default AllRoutes;
