import React from "react";
import Navbar from "../components/layout/Navbar";
import RegisterPageForm from "../components/forms/RegisterPageForm";
import { themeOptions } from "../theme";

export default function RegisterPage({
  onRegister,
  setShowComponent,
  themeOptions,
}) {
  return (
    <div>
      <Navbar setShowComponent={setShowComponent} />
      <div
        style={{
          minHeight: "calc(100vh - 64px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: themeOptions?.palette?.background?.default,
          width: "100vw",
        }}
      >
        <RegisterPageForm
          onRegister={onRegister}
          themeOptions={themeOptions}
          setShowComponent={setShowComponent}
        />
      </div>
    </div>
  );
}
