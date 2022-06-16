import { useState } from "react";
import Formulario from "./components/Formulario.jsx";
import Header from "./components/Header.jsx";
import ListadoPacientes from "./components/ListadoPacientes.jsx";

function App() {
  const initialState = () => JSON.parse(localStorage.getItem("patients")) || [];
  const [patients, setPatients] = useState(initialState);
  const [patientForm, setPatientForm] = useState({});

  return (
    <div className="container mx-auto mt-5">
      <Header />
      <div className="mt-5 md:flex">
        <Formulario
          setPatients={setPatients}
          patients={patients}
          patientForm={patientForm}
        />
        <ListadoPacientes
          patients={patients}
          setPatientForm={setPatientForm}
          setPatients={setPatients}
        />
      </div>
    </div>
  );
}

export default App;
