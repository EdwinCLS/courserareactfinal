import logo from "./logo.svg";
import "./App.css";
import Header from "./Componentes/Header";
import Main from "./Componentes/Main";
import { Route, Routes, useNavigate } from "react-router-dom";
import BookingForm from "./Componentes/BookingPage";
import { fetchAPI, submitAPI } from "./Api";
import { useReducer } from "react";
import ConfirmedBooking from "./Componentes/ConfirmedBooking";

const InitializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

const UpdateTimes = (state, action) => {
  switch (action.type) {
    case "Update_Date":
      const newDate = new Date(action.payload);
      return fetchAPI(newDate);
    default:
      return state;
  }
};

function App() {
  const navigate = useNavigate();
  const [availableTimes, dispatch] = useReducer(
    UpdateTimes,
    [],
    InitializeTimes
  );

  const SubmitForm = (formData) => {
    const isSuccess = submitAPI(formData);
    if (isSuccess === true) {
      navigate("/booking/confirmed");
    }
  };
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/BookingPage"
          element={
            <BookingForm
              availableTimes={availableTimes}
              dispatch={dispatch}
              SubmitForm={SubmitForm}
            />
          }
        />
        <Route path="/booking/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </>
  );
}

export default App;
