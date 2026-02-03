import { useState } from "react";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import en from "./i18n/en";
import fr from "./i18n/fr";

function App() {
  const [lang, setLang] = useState("en");
  const [page, setPage] = useState("home");

  const text = lang === "en" ? en : fr;

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar
        lang={lang}
        setLang={setLang}
        text={text}
        onLoginClick={() => setPage("login")}
        onRegisterClick={() => setPage("register")}
      />

      {page === "home" && (
        <div className="p-6">
          <p className="text-lg">
            {lang === "en"
              ? "Welcome to the Hotel Lost & Found System"
              : "Bienvenue dans le système des objets trouvés de l'hôtel"}
          </p>
        </div>
      )}

      {page === "login" && <Login />}
      {page === "register" && <Register />}
    </div>
  );
}

export default App;
