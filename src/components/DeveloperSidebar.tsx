import { BASE_API } from "@/lib/utils";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

export default function DeveloperSidebar() {
  const location = useLocation();
  const { userId } = useParams()

  const menuItems = [
    // { name: "dashboard", path: "/" },
    { name: "view profile", path: `/developer/portfolio/${userId}` },
    // { name: "find Company", path: "/developer/list" },
    // { name: "post a job", path: "/company/post-job" },
    // { name: "list of applicants", path: "/applicants" },
    { name: "messages", path: "/inbox" },
  ];

  const navigate = useNavigate()
  const handleLogout = async () => {

    try {
      const res = await fetch(`${BASE_API}/auth/api/logout`, {
        method: "POST",
        credentials: "include"
      })

      if (res.ok) {
        alert("User logout successfuly!")
        navigate(`/login`)
      }
    } catch (err) {
      console.log("failed to logout!", err);
    }

  }


  return (
    <aside className="w-64 bg-white shadow-lg p-4 flex flex-col">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Company Panel</h2>
      <nav className="flex-1 space-y-3">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`block px-3 py-2 rounded-md capitalize font-medium ${location.pathname === item.path
              ? "bg-blue-500 text-white"
              : "text-gray-700 hover:bg-gray-200"
              }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
      <button
        onClick={handleLogout}
        className="mt-auto px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
      >
        Logout
      </button>
    </aside>
  );
}
