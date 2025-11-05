import React from "react";
import Navbar from "../components/layout/Navbar";
import ServiceScrollRow from "../components/ServiceScrollRow";
import { themeOptions } from "../theme";

const massageServices = [
  {
    title: "Swedish massage",
    description: "Increases oxygen in blood and releases toxins.",
    price: "$80",
    duration: "1 hour",
  },
  {
    title: "Hot stone massage",
    description: "Deep relaxation and wellbeing.",
    price: "$135",
    duration: "1h 30m",
  },
  {
    title: "Remedial massage",
    description: "Manipulates soft tissues for therapy.",
    price: "$95",
    duration: "1 hour",
  },
  {
    title: "Aromatherapy massage",
    description: "Uses essential oils for relaxation.",
    price: "$90",
    duration: "1 hour",
  },
  {
    title: "Sports massage",
    description: "Targets sports injuries and recovery.",
    price: "$100",
    duration: "1 hour",
  },
];

const facialServices = [
  {
    title: "Classic facial",
    description: "Cleanses and revitalizes skin.",
    price: "$60",
    duration: "45 min",
  },
  {
    title: "Anti-aging facial",
    description: "Reduces wrinkles and firms skin.",
    price: "$85",
    duration: "1 hour",
  },
  {
    title: "Hydrating facial",
    description: "Moisturizes and refreshes skin.",
    price: "$70",
    duration: "1 hour",
  },
  {
    title: "Acne facial",
    description: "Treats acne and clears pores.",
    price: "$75",
    duration: "1 hour",
  },
  {
    title: "Brightening facial",
    description: "Improves skin tone and radiance.",
    price: "$80",
    duration: "1 hour",
  },
];

export default function BookNowPage({
  isAuthenticated,
  isOwner,
  themeOptions,
}) {
  // Pre vlastníka zobraz len jeho služby
  if (isAuthenticated && isOwner) {
    return <Navigate to="/owner-services" />;
  }
  return (
    <div
      style={{
        background: themeOptions.palette?.background?.default,
        height: "100vh",
        width: "100vw",
      }}
    >
      <Navbar />
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 0" }}>
        <div style={{ marginTop: 80 }}>
          <ServiceScrollRow
            title="Massage"
            services={massageServices}
            isAuthenticated={isAuthenticated}
            isOwner={isOwner}
          />
        </div>
        <ServiceScrollRow
          title="Facial Treatments"
          services={facialServices}
          isAuthenticated={isAuthenticated}
          isOwner={isOwner}
        />
      </div>
    </div>
  );
}
