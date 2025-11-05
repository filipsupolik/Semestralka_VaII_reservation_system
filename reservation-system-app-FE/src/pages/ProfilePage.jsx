import React from "react";
import Navbar from "../components/layout/Navbar";
import { themeOptions } from "../theme";

export default function ProfilePage() {
  return (
    <div style={{ background: themeOptions.palette?.background?.default, minHeight: "100vh" }}>
      <Navbar />
      <div style={{ maxWidth: 600, margin: "40px auto", padding: "0 16px", textAlign: "center" }}>
        <h2 style={{ color: themeOptions.palette?.primary?.main, fontWeight: 600 }}>Profil používateľa</h2>
        <p style={{ fontSize: "1.2rem", color: themeOptions.palette?.text?.primary }}>
          Tu si môžete pozrieť a upraviť svoje osobné údaje, rezervácie a nastavenia účtu.
        </p>
      </div>
    </div>
  );
}
