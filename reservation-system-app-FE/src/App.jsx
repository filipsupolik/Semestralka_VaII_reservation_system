import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import BookNowPage from "./pages/BookNowPage";
import ProfilePage from "./pages/ProfilePage";
import OwnerServicesPage from "./pages/OwnerServicesPage";
import { Routes, Route, Navigate } from "react-router-dom";
import { themeOptions } from "./theme";
import { requestAuth } from "./api/authService";
import { useState } from "react";

function App() {
  const [showComponent, setShowComponent] = useState("home");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isOwner, setIsOwner] = useState(false);
  const onLogin = (e, userName, password, isOwner) => {
    requestAuth("POST", "/login", { userName, password, isOwner })
      .then((response) => {
        setShowComponent("showServices");
        setIsAuthenticated(true);
      })
      .catch((error) => {
        setShowComponent("login");
      });
  };

  const onRegister = (e, firstName, lastName, email, password, isOwner) => {
    requestAuth("POST", "/register", {
      firstName,
      lastName,
      email,
      password,
      isOwner,
    })
      .then((response) => {
        setShowComponent("showServices");
        setIsOwner(isOwner);
      })
      .catch((error) => {
        setShowComponent("login");
      });
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          showComponent === "home" && (
            <HomePage setShowComponent={setShowComponent} />
          )
        }
      />
      <Route
        path="/login"
        element={
          showComponent === "login" && (
            <LoginPage onLogin={onLogin} setShowComponent={setShowComponent} />
          )
        }
      />
      <Route
        path="/register"
        element={<RegisterPage onRegister={onRegister} />}
      />
      <Route
        path="/book-now"
        element={
          <BookNowPage
            isAuthenticated={isAuthenticated}
            isOwner={isOwner}
            themeOptions={themeOptions}
          />
        }
      />
      {isAuthenticated && !isOwner && (
        <Route path="/profile" element={<ProfilePage />} />
      )}
      {isAuthenticated && isOwner && (
        <Route path="/owner-services" element={<OwnerServicesPage />} />
      )}
      {/* Stránka rezervácie termínu */}
      <Route
        path="/book/:serviceId"
        element={
          isAuthenticated && !isOwner ? (
            <div style={{ padding: 40 }}>
              <h2>Rezervácia termínu</h2>
              {/* Tu bude rezervačný formulár */}
            </div>
          ) : (
            <Navigate to="/book-now" />
          )
        }
      />
    </Routes>
  );
}

export default App;
