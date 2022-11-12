import React, { useState } from 'react'
import Login from './googleLogin'
import Logout from './googleLogout'

const GoogleToggle = () => {
  const [stateAuth, setStateAuth] = useState()
  const response = (res) => {
    setStateAuth(res)
  }
  return (
    <div className='d-flex justify-content-center align-items-center flex-column'
      style={{ height: "100vh" }}
    >
      {!stateAuth ?
        <Login response={response} />
        :
        <div className='d-flex justify-content-center align-items-center flex-column'>
          <img src={stateAuth.data.picture} />
          <h5>{stateAuth.data.name}</h5>
          <p>{stateAuth.data.email}</p>
        <Logout response={response} />
        </div>
      }
    </div>
  )
}

export default GoogleToggle