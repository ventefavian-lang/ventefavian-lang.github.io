/* =========================================================
   RUTABECA — Contador de visitantes en vivo
   Usa Firebase Realtime Database (plan gratuito) para contar
   cuántas personas tienen el sitio abierto en este momento.
   Es un conteo REAL, no un número decorativo.

   CONFIGURACIÓN REQUERIDA (ver README, sección "Contador en vivo"):
   Reemplaza los valores de firebaseConfig por los de tu propio
   proyecto gratuito de Firebase antes de que esto funcione.
   ========================================================= */

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_PROYECTO.firebaseapp.com",
  databaseURL: "https://TU_PROYECTO-default-rtdb.firebaseio.com",
  projectId: "TU_PROYECTO",
};

(function () {
  const el = document.getElementById("live-visitor-count");
  if (!el) return;

  // Si no se configuró Firebase todavía, no intentar conectar.
  if (firebaseConfig.apiKey === "TU_API_KEY") {
    el.textContent = "(activa el contador siguiendo el README)";
    return;
  }

  try {
    firebase.initializeApp(firebaseConfig);
    const db = firebase.database();

    const presenceRef = db.ref("rutabeca_presence");
    const myRef = presenceRef.push();
    const connectedRef = db.ref(".info/connected");

    connectedRef.on("value", (snap) => {
      if (snap.val() === true) {
        myRef.set(true);
        myRef.onDisconnect().remove();
      }
    });

    presenceRef.on("value", (snap) => {
      const count = snap.numChildren();
      el.textContent = count === 1 ? "1 persona" : count + " personas";
    });
  } catch (e) {
    el.textContent = "";
    console.warn("Contador de visitantes: no se pudo conectar.", e);
  }
})();
