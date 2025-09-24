import logo from "../assets/tool.png";
import "./TopbarNavigation.css";

export default function TopBarNavigation() {
  return (
    <div className="navigation-bar">
      <nav className="page-navigation-elem">
        <img src={logo} alt="toolbar-logo"></img>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Profile</li>
        </ul>
      </nav>
    </div>
  );
}
