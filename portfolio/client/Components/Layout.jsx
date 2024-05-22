import image from "../images/logo.png";

import { Link } from "react-router-dom";
export default function Layout() {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        background: "rgba(255,255,255,0.75)",
        padding: "1rem",
        top: 0,
        width: "100%",
        zIndex: 10,
      }}
    >
      <nav>
        <Link to="/">
          <img src={image} alt="Logo" style={{ height: "20px" }} />
        </Link>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/education">Education</Link>
        <Link to="/project">Project</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <br />
      <hr />
    </div>
  );
}
