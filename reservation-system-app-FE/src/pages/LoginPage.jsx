import React from "react";
import Navbar from "../components/layout/Navbar";
import LoginPageForm from "../components/forms/LoginPageForm";
import { themeOptions } from "../theme";

export default function LoginPage({ onLogin, setShowComponent }) {
  return (
    <div>
      <Navbar setShowComponent={setShowComponent} />
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: themeOptions.palette?.background?.default,
          width: "100vw",
        }}
      >
        <LoginPageForm
          themeOptions={themeOptions}
          onLogin={onLogin}
          setShowComponent={setShowComponent}
        />
      </div>
    </div>
  );
}
