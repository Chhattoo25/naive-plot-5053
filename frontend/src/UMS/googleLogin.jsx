import React, { useEffect } from 'react'
import GoogleLogin from 'react-google-login';
import { gapi } from 'gapi-script'
import axios from 'axios'

const Login = (props) => {
    const clientId='589051674807-niu3snhvvldfvufjjf0emlb6sgfrvp1o.apps.googleusercontent.com';
    // const clientId = "233419149658-kvv0vd3go48fp56v22vr0qfoimvkp5tl.apps.googleusercontent.com";
    useEffect(() => {
        gapi.load("client:auth2", () => {
            gapi.auth2.init({ clientId: clientId })
        })
    }, [])

    const responseGoogle = (response) => {
        // console.log(response)
        axios.post('http://localhost:8000',
            { idToken: response.tokenId }
        ).then(response => {
            // console.log(response)
            props.response(response)
        })
            .catch(err => { console.log(err) })
    }
    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}

export default Login