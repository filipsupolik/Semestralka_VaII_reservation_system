import React from "react";
import Navbar from "../components/layout/Navbar";
import { themeOptions } from "../theme";

export default function OwnerServicesPage() {
  return (
    <div style={{ background: themeOptions.palette?.background?.default, minHeight: "100vh" }}>
      <Navbar />
      <div style={{ maxWidth: 900, margin: "40px auto", padding: "0 16px", textAlign: "center" }}>
        <h2 style={{ color: themeOptions.palette?.primary?.main, fontWeight: 600 }}>Moje služby</h2>
        <p style={{ fontSize: "1.2rem", color: themeOptions.palette?.text?.primary }}>
          Tu vidíte všetky služby, ktoré ponúkate ako vlastník. Môžete ich upravovať alebo pridávať nové.
        </p>
        {/* Tu môže byť zoznam služieb vlastníka */}
      </div>
    </div>
  );
}
