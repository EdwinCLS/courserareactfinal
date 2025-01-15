import { useState } from "react";
import styles from "../Componentes/CSS/Booking.module.css";

function BookingForm({ availableTimes, dispatch, SubmitForm }) {
  const [fecha, setFecha] = useState(new Date().toISOString().split("T")[0]);
  const [tiempo, setTiempo] = useState("");
  const [personas, setPersonas] = useState(1);
  const [ocasion, setOcasion] = useState("");
  const [nombre, setNombre] = useState("");

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setFecha(newDate);
    dispatch({ type: "Update_Date", payload: newDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!tiempo) {
      alert("Please select a time.");
      return;
    }

    if (personas < 1 || personas > 10) {
      alert("Number of guests must be between 1 and 10.");
      return;
    }

    const formData = {
      name: nombre,
      date: fecha,
      time: tiempo,
      guests: personas,
      occasion: ocasion,
    };

    SubmitForm(formData);
  };
  return (
    <>
      <div className={styles.cuerpo}>
        <div className={styles.Container}>
          <style>
            {`
      input:invalid, select:hover:invalid {
        border: 2px solid red;
      }
      input:hover:valid, select:valid {
        border: 2px solid green;
      }
      
    `}
          </style>

          <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="first-Name">First Name</label>
            <input placeholder="First Name" type="text" id="first-Name" />
            <label htmlFor="res-date">Choose date:</label>
            <input
              type="date"
              id="res-date"
              value={fecha}
              onChange={handleDateChange}
            />

            <label htmlFor="res-time">Choose time:</label>
            <select
              id="res-time"
              className={tiempo === "" ? "initial" : ""}
              value={tiempo}
              onChange={(e) => setTiempo(e.target.value)}
              required
            >
              <option value="" disabled>
                Select a time
              </option>
              {availableTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>

            <label htmlFor="guests">Number of guests:</label>
            <input
              type="number"
              id="guests"
              value={personas}
              onChange={(e) => setPersonas(e.target.value)}
              required
              min="1"
              max="10"
            />

            <label htmlFor="occasion">Occasion:</label>
            <select
              id="occasion"
              className={ocasion === "" ? "initial" : ""}
              value={ocasion}
              onChange={(e) => setOcasion(e.target.value)}
              required
            >
              <option value="" disabled>
                Select an occasion
              </option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </select>

            <button
              className={styles.boton}
              aria-label="make reservation"
              type="submit"
            >
              Make Your Reservation
            </button>
          </form>
        </div>{" "}
      </div>
    </>
  );
}

export default BookingForm;
