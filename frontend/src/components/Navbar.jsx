function Navbar({ lang, setLang, text, onLoginClick, onRegisterClick }) {
  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">
        {text.title}
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

        <button
          onClick={onLoginClick}
          className="bg-blue-600 text-white px-3 py-1 rounded"
        >
          {text.login}
        </button>

        <button
          onClick={onRegisterClick}
          className="bg-green-600 text-white px-3 py-1 rounded"
        >
          Register
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
