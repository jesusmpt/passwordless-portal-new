import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Diagnostics from "./pages/Diagnostics";
import Steps from "./pages/Steps";
import Tap from "./pages/Tap";
import Help from "./pages/Help";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <div>
      <NavBar />
      <main style={{ padding: 20 }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/diagnostics" element={<Diagnostics />} />
          <Route path="/steps" element={<Steps />} />
          <Route path="/tap" element={<Tap />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </main>
    </div>
  );
}
