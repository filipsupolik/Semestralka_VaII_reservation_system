import React from "react";
import Navbar from "../components/layout/Navbar";
import { themeOptions } from "../theme";

export default function HomePage() {
  return (
    <div
      style={{
        background: themeOptions.palette?.background?.default,
        height: "100vh",
        width: "100vw",
      }}
    >
      <Navbar />
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "60vh",
          overflow: "hidden",
        }}
      >
        <img
          src="/public/demo-massage.jpg" // nahraďte vlastnou cestou k obrázku
          alt="Beauty Salon Demo"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(0.7)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
          }}
        >
          <h1 style={{ fontSize: "4rem", fontWeight: 700, margin: 0 }}>
            BEAUTY SALON DEMO
          </h1>
          <p style={{ fontSize: "1.5rem", margin: "16px 0" }}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
          </p>
          <button
            style={{
              padding: "12px 32px",
              fontSize: "1.2rem",
              borderRadius: 6,
              border: "2px solid #fff",
              background: "transparent",
              color: "#fff",
              fontWeight: 600,
              cursor: "pointer",
              marginTop: 16,
            }}
          >
            BOOK NOW
          </button>
        </div>
      </div>
      <div
        style={{
          maxWidth: 900,
          margin: "40px auto",
          padding: "0 16px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: themeOptions.palette?.primary?.main,
            fontWeight: 600,
          }}
        >
          O našom salóne
        </h2>
        <p
          style={{
            fontSize: "1.2rem",
            color: themeOptions.palette?.text?.primary,
          }}
        >
          Vitajte v Beauty Salon Demo! Ponúkame širokú škálu masáží,
          kozmetických a relaxačných služieb v modernom prostredí. Naši
          profesionáli sa postarajú o vaše pohodlie a zdravie. Rezervujte si
          termín ešte dnes a zažite dokonalý relax.
        </p>
      </div>
    </div>
  );
}
