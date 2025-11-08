import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav style={{ padding: 12, background: "#f2f2f2" }}>
      <Link to="/" style={{ marginRight: 12 }}>Dashboard</Link>
      <Link to="/diagnostics" style={{ marginRight: 12 }}>Diagnostics</Link>
      <Link to="/steps" style={{ marginRight: 12 }}>Steps</Link>
      <Link to="/tap" style={{ marginRight: 12 }}>Temporary Access</Link>
      <Link to="/help">Help</Link>
    </nav>
  );
}
