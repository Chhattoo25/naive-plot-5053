import React from "react";
import { Route, Routes } from "react-router-dom";
import Beauty from "../components/Beauty_Component/Beauty";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/beauty" element={<Beauty />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
