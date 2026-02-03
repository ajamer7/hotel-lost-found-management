function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          Register
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter full name"
              className="w-full border px-3 py-2 rounded"
            />
          </div>

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

          <div>
            <label className="block mb-1 text-sm font-medium">
              Role
            </label>
            <select className="w-full border px-3 py-2 rounded">
              <option value="guest">Guest</option>
              <option value="staff">Staff</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
