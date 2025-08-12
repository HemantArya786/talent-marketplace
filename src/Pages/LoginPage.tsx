import { useState, useEffect } from "react";
import Image from "../../public/image.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth, provider } from "@/lib/firebase";
import { signInWithPopup } from "firebase/auth";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const navigate = useNavigate();
  const location = useLocation()

  const closeModal = () => setShowModal(false);


  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const userExists = params.get('userExists')


    if (userExists === 'true') {
      setShowModal(true);
      // alert('User already exists. Please log in.')
    }
  }, [location])

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
  };

  const handleGoogleLogin = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      const user = response.user;

      const userData = {
        name: user.displayName,
        email: user.email,
        avatar: user.photoURL,
        phoneNumber: user.phoneNumber,
        firebaseToken: await user.getIdToken(),
      };

      const apiResponse = await fetch(
        "http://localhost:3000/auth/api/google-login",
        {
          method: "POST",
          credentials: "include",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(userData),
        }
      );

      if (!apiResponse.ok) throw new Error("Login failed");

      const result = await apiResponse.json();

      if (result.success && result.role === "user") {
        navigate("/developer/portfolio");
      } else if (result.success && result.role === "client") {
        navigate("/company/portfolio");
      } else if (result.needsSignup) {
        navigate("/role-selection");
      } else {
        throw new Error("Unknown response from server");
      }
    } catch (error) {
      console.error("Google login error:", error);
      alert("Login failed. Please try again.");
    }
  };

  const handleLinkedinLogin = () => {
    const params = new URLSearchParams({
      response_type: "code",
      client_id: import.meta.env.VITE_LINKEDIN_CLIENT_ID,
      redirect_uri: "http://localhost:3000/auth/api/linkedin-login",
      scope: "openid email profile",
    });

    window.location.href = `https://www.linkedin.com/oauth/v2/authorization?${params}`;
  };

  return (
    <div className="flex h-screen">
      {/* Right: Image */}
      <div className="hidden md:block w-1/2">
        <img
          src={Image}
          alt="Login Visual"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
            <h3 className="text-lg font-semibold mb-2">User Already Exists</h3>
            <p className="text-sm text-gray-700 mb-4">
              Please log in.
            </p>
            <button
              onClick={closeModal}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}


      {/* Left: Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-6 md:px-12">
        <div className="w-full max-w-md space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            Welcome back
          </h2>

          {/* Social Login */}
          <div className="flex flex-col gap-4">
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Continue with Google
            </button>

            <button
              type="button"
              onClick={handleLinkedinLogin}
              className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
            >
              <img
                src="https://www.svgrepo.com/show/448234/linkedin.svg"
                alt="LinkedIn"
                className="w-5 h-5"
              />
              Continue with LinkedIn
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-2">
            <div className="flex-grow h-px bg-gray-300" />
            <span className="text-gray-500 text-sm">or</span>
            <div className="flex-grow h-px bg-gray-300" />
          </div>

          {/* Login Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Show Password */}
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
              Log In
            </button>
          </form>


          {/* Redirect */}
          <p className="text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link to={"/signup"} className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
