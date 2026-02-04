import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import en from "./i18n/en";
import fr from "./i18n/fr";

function App() {
  const [lang, setLang] = useState("en");
  const text = lang === "en" ? en : fr;

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <Navbar lang={lang} setLang={setLang} text={text} />

        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
