import React from 'react'
import Adminupdate from '../../Admin/admin_addproducts'
import Adminnavba from "../../Admin/admin_navbar"
import Allproduct from '../../Admin/Allproduct'

function Admin_home() {
  return (
    <div>
        <Adminnavba/>
        <Adminupdate/>
        <Allproduct/>
    </div>
  )
}

export default Admin_home