import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import IntroductionPage from "./MainPage/MainPage";
import LoginPage from "./LoginPage/LoginPage";

createRoot(document.getElementById("root")).render(
  <IntroductionPage></IntroductionPage>
);
