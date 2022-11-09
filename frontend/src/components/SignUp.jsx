import React from 'react'
import { useState } from 'react'
import { adduser } from '../Server/Api';

const initialvalue={
  email:'',
  password:''
}
const SignUp = () => {
  const [user, setUser] = useState(initialvalue);

const valuechange = (e)=>{
  setUser({...user,[e.target.name]:e.target.value})
  //console.log(user)
}

const AddUserDetailes =()=>{
  //console.log(user)
  adduser(user)
}

  return (
    <div>
      <input type="text" name='email' placeholder='ENTER EMAIL' onChange={(e)=>valuechange(e)}/>
      <br />
      <input type="password" name='password' placeholder='Enter Password' onChange={(e)=>valuechange(e)}/>
      <br />
      <button onClick={AddUserDetailes}>SIGN UP</button>
    </div>
  )
}

export default SignUp