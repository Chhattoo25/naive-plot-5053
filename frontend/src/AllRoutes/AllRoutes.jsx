import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Women from '../pages/WomensPage/Women'

const AllRoutes = () => {
  return (
    <div>
<Routes >
<Route path="/women" element={<Women/>}/>
</Routes>
    </div>
  )
}

export default AllRoutes