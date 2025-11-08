import React, { useState } from "react";
import { requestTap } from "../apiClient";

export default function Tap() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hours, setHours] = useState(1);

  async function onRequest() {
    setLoading(true);
    try {
      const r = await requestTap({ durationHours: Number(hours), usableOnce: true, reason: "Recovery" });
      setResult(r);
    } catch (e) {
      setResult({ error: e.message });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h3>Generar Temporary Access Password (TAP)</h3>
      <div>
        <label>DuraciÃ³n (horas): </label>
        <input type="number" value={hours} onChange={(e) => setHours(e.target.value)} min="1" max="24" />
        <button onClick={onRequest} disabled={loading}>Generar TAP</button>
      </div>
      <div style={{ marginTop: 12 }}>
        {loading && <div>Generando...</div>}
        {result && result.error && <div style={{ color: "red" }}>{result.error}</div>}
        {result && result.tap && (
          <div>
            <h4>TAP (solo mostrado una vez)</h4>
            <pre style={{ background: "#f6f6f6", padding: 8 }}>{result.tap}</pre>
            <div>Expira: {result.expiresAt}</div>
          </div>
        )}
      </div>
    </div>
  );
}
