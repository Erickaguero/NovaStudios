// Cobertor temporal de pantalla completa ("Muy pronto").
// Para desactivarlo y volver a mostrar la web, cambia OVERLAY_ACTIVE a false.
const OVERLAY_ACTIVE = true;

export default function ComingSoonOverlay() {
  if (!OVERLAY_ACTIVE) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 2147483647,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "28px",
        backgroundColor: "#0b0b0f",
        textAlign: "center",
        padding: "24px",
      }}
    >
      <img
        src="/assets/img/core-img/logo-light.png"
        alt="Nova Studios"
        style={{ height: "64px", width: "auto" }}
      />
      <h1
        style={{
          color: "#ffffff",
          fontSize: "clamp(2rem, 6vw, 3.5rem)",
          fontWeight: 700,
          letterSpacing: "0.04em",
          margin: 0,
        }}
      >
        Muy pronto
      </h1>
      <p
        style={{
          color: "rgba(255, 255, 255, 0.6)",
          fontSize: "clamp(1rem, 2.5vw, 1.15rem)",
          maxWidth: "480px",
          margin: 0,
        }}
      >
        Estamos preparando algo increíble. Vuelve pronto.
      </p>
    </div>
  );
}
