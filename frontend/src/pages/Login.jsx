function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          Login
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
