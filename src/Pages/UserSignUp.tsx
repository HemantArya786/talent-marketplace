import { useState } from "react";
import Image from "../../public/image.jpg";
import { Link, useNavigate } from "react-router-dom";
import { auth, provider } from '@/lib/firebase'
import { signInWithPopup } from 'firebase/auth'

export default function UserSignUp() {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        // Add validation or backend API call here
    };

    const handleGoogleLogin = async () => {

        try {

            const response = await signInWithPopup(auth, provider)
            const token = await response.user.getIdToken();

            const user = response.user
            const userData = {
                name: user.displayName,
                email: user.email,
                avatar: user.photoURL,
                phoneNumber: user.phoneNumber,
                firebaseToken: token
            }

            const apiResponse = await fetch('http://localhost:3000/auth/api/user-google-signup', {
                method: 'POST',
                credentials: 'include',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(userData)
            })

            if (!apiResponse.ok) {
                throw new Error('Failed to login.')
            }

            const responseData = await apiResponse.json()

            const userId = responseData.user.userId
            alert('Signup successful');
            console.log(responseData)

            navigate(`/developer/preview/user/${userId}`)
        } catch (error) {
            console.log(error)
        }
    }
    
    const handleLinkedinLogin = () => {

        const params = new URLSearchParams({
            response_type: 'code',
            client_id: import.meta.env.VITE_LINKEDIN_CLIENT_ID,
            redirect_uri: "http://localhost:3000/auth/api/user-linkedin-signup",
            scope: "openid email profile"
        })

        window.location.href = `https://www.linkedin.com/oauth/v2/authorization?${params}`
    }

    return (
        <div className="flex h-screen">

            {/* Right Section: Image */}
            <div className="hidden md:block w-1/2">
                <img
                    src={Image}
                    alt="Signup Visual"
                    className="w-full h-full object-cover"
                />
            </div>
            {/* Left Section: Signup Form */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 md:px-12">
                <div className="w-full max-w-md space-y-6">
                    <h2 className="text-3xl font-bold text-gray-800 text-center">Create your account</h2>

                    {/* Social Signup */}
                    <div className="flex flex-col gap-4">
                        <button type="button" onClick={handleGoogleLogin} className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
                            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                            Continue with Google
                        </button>
                        <button type="button" onClick={handleLinkedinLogin}
                            className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
                            <img src="https://www.svgrepo.com/show/448234/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
                            Continue with LinkedIn
                        </button>
                    </div>

                    {/* Divider */}
                    <div className="flex items-center gap-2">
                        <div className="flex-grow h-px bg-gray-300" />
                        <span className="text-gray-500 text-sm">or</span>
                        <div className="flex-grow h-px bg-gray-300" />
                    </div>

                    {/* Manual Signup Form */}
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="flex gap-4">
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type={showPassword ? "text" : "password"}
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        {/* Show Password Option */}
                        <div className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                id="show-password"
                                onChange={() => setShowPassword(!showPassword)}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label htmlFor="show-password" className="text-sm text-gray-700">
                                Show Password
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                        >
                            Sign Up
                        </button>
                    </form>

                    {/* Redirect */}
                    <p className="text-center text-sm text-gray-600">
                        Already have an account?{" "}
                        <Link to={"/login"} className="text-blue-600 hover:underline">
                            Log in
                        </Link>
                    </p>
                </div>
            </div>


        </div>
    );
}