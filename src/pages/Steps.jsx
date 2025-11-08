import React from "react";

export default function Steps() {
  return (
    <div>
      <h3>Pasos para convertirse a Passwordless</h3>
      <ol>
        <li>Registrar Microsoft Authenticator y configurar notificaciones/PIN.</li>
        <li>(Opcional) Registrar clave FIDO2.</li>
        <li>Activar mÃ©todo Passwordless en tu cuenta (botÃ³n en este portal para usuarios permitidos).</li>
        <li>Realizar una prueba de inicio de sesiÃ³n sin contraseÃ±a.</li>
      </ol>
    </div>
  );
}
