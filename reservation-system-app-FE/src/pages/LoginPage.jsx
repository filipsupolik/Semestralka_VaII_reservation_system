import React from "react";
import Navbar from "../components/layout/Navbar";
import LoginPageForm from "../components/forms/LoginPageForm";

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LoginPageForm />
      </div>
    </>
  );
}
