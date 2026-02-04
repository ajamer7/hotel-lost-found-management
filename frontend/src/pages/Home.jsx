import { useAuth } from "../context/AuthContext";

function Home() {
  const { user } = useAuth();

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-2">
        Dashboard
      </h2>

      {user?.role === "admin" && (
        <p>You are logged in as Admin</p>
      )}

      {user?.role === "staff" && (
        <p>You are logged in as Staff</p>
      )}

      {user?.role === "guest" && (
        <p>You are logged in as Guest</p>
      )}
    </div>
  );
}

export default Home;
