import React, { useEffect, useState } from "react";
import { getStatus } from "../apiClient";
import CheckRow from "../components/CheckRow";

export default function Diagnostics() {
  const [checks, setChecks] = useState(null);
  useEffect(() => {
    getStatus().then(data => {
      const list = [
        { id: "auth", title: "Authenticator registrado", status: data.authenticatorRegistered ? "ok" : "pending" },
        { id: "passwordless", title: "Passwordless habilitado", status: data.passwordlessEnabled ? "ok" : "warn" },
        { id: "fido2", title: "FIDO2 registrado", status: data.fido2Registered ? "ok" : "pending" },
      ];
      setChecks(list);
    }).catch(e => setChecks([{ id: "err", title: "Error obteniendo estado", status: "warn" }]));
  }, []);
  if (!checks) return <div>Cargando diagnosis...</div>;
  return (
    <div>
      <h3>DiagnÃ³stico automÃ¡tico</h3>
      {checks.map(c => <CheckRow key={c.id} title={c.title} status={c.status} />)}
    </div>
  );
}
