
import { Link, useLocation } from "react-router-dom";
import { Brain, Building2 } from "lucide-react";
import { useEffect, useState } from "react";


const RoleSelection = () => {

  const [showModal, setShowModal] = useState<boolean>(false);

  // const navigate = useNavigate();
  const location = useLocation()

  const closeModal = () => setShowModal(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const userExists = params.get('userExists')

    if (userExists === 'false') {
      setShowModal(true);
      // alert('User already exists. Please log in.')
    }
  }, [location])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-green-100 px-4">

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
            <h3 className="text-lg font-semibold mb-2">User doesn't exist!</h3>
            <p className="text-sm text-gray-700 mb-4">
              Please signup to login.
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

      <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-xl text-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Who are you?
        </h1>
        <p className="text-gray-600 mb-8">
          Choose your role to get started
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            to="/signup-user"
            className="group border border-blue-600 rounded-2xl p-6 bg-white hover:bg-blue-600 transition-all duration-300 hover:text-white shadow-lg hover:shadow-xl"
          >
            <div className="flex flex-col items-center">
              <Brain className="w-10 h-10 mb-3 text-blue-600 group-hover:text-white transition" />
              <h2 className="text-xl font-semibold">AI Developer</h2>
              <p className="text-sm mt-1 opacity-70">or GTM Expert</p>
            </div>
          </Link>

          <Link
            to="/signup-client"
            className="group border border-green-600 rounded-2xl p-6 bg-white hover:bg-green-600 transition-all duration-300 hover:text-white shadow-lg hover:shadow-xl"
          >
            <div className="flex flex-col items-center">
              <Building2 className="w-10 h-10 mb-3 text-green-600 group-hover:text-white transition" />
              <h2 className="text-xl font-semibold">Client</h2>
              <p className="text-sm mt-1 opacity-70">or Company</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
