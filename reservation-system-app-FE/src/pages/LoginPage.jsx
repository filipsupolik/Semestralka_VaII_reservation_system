import React from "react";
import Navbar from "../components/layout/Navbar";
import LoginPageForm from "../components/forms/LoginPageForm";
import { themeOptions } from "../theme";

export default function LoginPage({ setShowComponent }) {
  return (
    <div>
      <Navbar />
      <div
        style={{
          height: "100vh", // 64px je výška Navbaru
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: themeOptions.palette?.background?.default,
          width: "100vw",
        }}
      >
        <LoginPageForm themeOptions={themeOptions} />
      </div>
    </div>
  );
}
