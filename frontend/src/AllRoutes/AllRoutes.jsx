import React from "react";
import { Route, Routes } from "react-router-dom";
import Women from "../pages/WomensPage/Women";
import Beauty from "../components/Beauty_Component/Beauty";
import Men from "../pages/MensPage/Men";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>Modesens Home page</h1>} />
        <Route path="/women" element={<Women />} />
        <Route path="/mens" element={<Men />} />
        <Route path="/beauty" element={<Beauty />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
