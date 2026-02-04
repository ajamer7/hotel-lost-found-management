import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar({ lang, setLang, text }) {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">
        <Link to="/">{text.title}</Link>
      </h1>

      <div className="flex items-center gap-4">
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          className="border rounded px-2 py-1"
        >
          <option value="en">EN</option>
          <option value="fr">FR</option>
        </select>

        {!user && (
          <>
            <Link
              to="/login"
              className="bg-blue-600 text-white px-3 py-1 rounded"
            >
              {text.login}
            </Link>

            <Link
              to="/register"
              className="bg-green-600 text-white px-3 py-1 rounded"
            >
              Register
            </Link>
          </>
        )}

        {user && (
          <>
            <span className="text-sm text-gray-700">
              {user.email} ({user.role})
            </span>

            <button
              onClick={logout}
              className="bg-red-600 text-white px-3 py-1 rounded"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
