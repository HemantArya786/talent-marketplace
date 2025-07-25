import { Button } from '@/components/ui/button'
import { auth, provider } from '@/lib/Firebase'
import { signInWithPopup } from 'firebase/auth'


const Test = () => {


    // const handleClick = async () => {


    //         try {
    //             const response = await signInWithPopup(auth, provider)
    //             let user = response.user
    //             let authProvider = response.providerId
    //             console.log(response);

    //             let userInfo = {
    //                 name: user.displayName,
    //                 email: user.email,
    //                 avatar: user.photoURL,
    //                 phoneNumber: user.phoneNumber,
    //                 loginType: authProvider
    //             }
    //             console.log(userInfo);

    //             const apiFetch = await fetch(`http://localhost:3000/api/google-login`, {
    //                 method: 'POST',
    //                 credentials: 'include',
    //                 headers: {
    //                     'content-type': 'application/json'
    //                 },
    //                 body: JSON.stringify(userInfo)
    //             })

    //             if (!apiFetch.ok) {
    //                 throw new Error(`Failed to login`)
    //             }

    //             const postResponse = await apiFetch.json()
    //             console.log(postResponse);
    //         }
    //         catch (err) {
    //             console.log(err)
    //         }
    //     }

       const googleLogin = async () => {
        try {
            const response = await signInWithPopup(auth, provider)
            const user = response.user
            const userData = {
                name: user.displayName,
                email: user.email,
                avatar: user.photoURL,
                phoneNumber: user.phoneNumber
            }
            const apiResponse = await fetch('http://localhost:3000/api/google-login', {
                method: 'POST',
                credentials: 'include',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(userData)
            })

            if (!apiResponse.ok) {
                throw new Error('Failed to login.')
            }

            const responseData = await apiResponse.json()
            console.log(responseData)
            
            // navigate('/dashboard')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>

            <h1>Google authentications</h1>
            <Button onClick={googleLogin}>
                Sign in with Google
            </Button>
        </div>
    )
}

export default Test

// import React from 'react'
// import { auth, provider } from './utils/Firebase'
// import { signInWithPopup } from 'firebase/auth'
// import { useNavigate } from 'react-router-dom'

// const Login = () => {
//     const navigate = useNavigate()
 
//     return (
//         <div >
//             <h1>Google Login Integration</h1>
//             <button onClick={googleLogin}>Sign In With Google</button>
//         </div>
//     )
// }

// export default Login 