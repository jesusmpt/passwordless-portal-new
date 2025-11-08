import React from "react";

export default function CheckRow({ title, status, action }) {
  const color = status === "ok" ? "green" : status === "warn" ? "orange" : "gray";
  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: 8, borderBottom: "1px solid #eee" }}>
      <div>
        <strong>{title}</strong>
      </div>
      <div>
        <span style={{ color, marginRight: 12 }}>{status}</span>
        {action && <button onClick={action}>AcciÃ³n</button>}
      </div>
    </div>
  );
}
