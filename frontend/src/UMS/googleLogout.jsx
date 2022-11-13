import React from 'react'
import { GoogleLogout } from 'react-google-login';

const Logout = (props) => {
    const logout = ()=>{
        console.log('logout successful')
        props.response()
    }
    const clientId= "589051674807-niu3snhvvldfvufjjf0emlb6sgfrvp1o.apps.googleusercontent.com";
    return (
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={logout}
            ></GoogleLogout>
        </div>
    )
}

export default Logout