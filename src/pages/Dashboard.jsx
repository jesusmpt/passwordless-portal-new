import React, { useEffect, useState } from "react";
import { getStatus } from "../apiClient";

export default function Dashboard() {
  const [status, setStatus] = useState(null);
  useEffect(() => {
    getStatus().then(setStatus).catch((e) => setStatus({ error: e.message }));
  }, []);
  if (!status) return <div>Cargando...</div>;
  if (status.error) return <div>Error: {status.error}</div>;
  return (
    <div>
      <h3>Estado de onboarding</h3>
      <ul>
        <li>Authenticator registrado: <strong>{status.authenticatorRegistered ? "SÃ­" : "No"}</strong></li>
        <li>Passwordless habilitado: <strong>{status.passwordlessEnabled ? "SÃ­" : "No"}</strong></li>
        <li>FIDO2 registrado: <strong>{status.fido2Registered ? "SÃ­" : "No"}</strong></li>
        <li>TAP disponible: <strong>{status.tapAvailable ? "SÃ­" : "No"}</strong></li>
      </ul>
    </div>
  );
}
