import { Link, useLocation } from "react-router-dom";

function ConfirmedBooking() {
  const location = useLocation();
  const formData = location.state?.formData;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #6e7dff, #9aafd9)", // Fondo degradado
        color: "#fff",
        textAlign: "center",
        fontFamily: "'Arial', sans-serif",
        padding: "20px",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          marginBottom: "20px",
          textShadow: "2px 2px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        Booking Confirmed {formData.name}
      </h1>
      <h2
        style={{
          fontSize: "1.5rem",
          fontWeight: "normal",
          marginBottom: "30px",
          opacity: 0.8,
          textShadow: "1px 1px 6px rgba(0, 0, 0, 0.2)", // Sombra suave
        }}
      >
        Please arrive 10 minutes early to ensure a smooth experience.
      </h2>
      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "#ff6f61",
          color: "#fff",
          fontSize: "1rem",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "all 0.3s ease-in-out",
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "#ff4b36"; // Efecto hover
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = "#ff6f61"; // Efecto hover
        }}
      >
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          Return to homepage
        </Link>
      </button>
    </div>
  );
}

export default ConfirmedBooking;
