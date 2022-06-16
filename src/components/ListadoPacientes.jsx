import { useEffect } from "react";
import Paciente from "./Paciente";

const ListadoPacientes = ({ patients = [], setPatientForm, setPatients }) => {
  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  return (
    <div className="md:w-1/2 lg:w-3/5 pb-2 md:h-screen overflow-y-scroll">
      <h2 className="font-medium text-black text-3xl text-center">
        Listado de pacientes
      </h2>
      <p className="text-lg my-4 text-center">
        Administra tus
        <span className="text-indigo-400 font-bold"> pacientes y citas</span>
      </p>

      {patients.length === 0 && (
        <div className="bg-indigo-600 rounded p-4">
          <p className=" font-semibold text-white text-center text-lg">
            Aquí apareceran los pacientes
          </p>
        </div>
      )}
      {patients.map((patient) => {
        return (
          <Paciente
            key={patient.id}
            {...patient}
            setPatientForm={setPatientForm}
            setPatients={setPatients}
          />
        );
      })}
    </div>
  );
};

export default ListadoPacientes;
