import Paciente from "./Paciente";
import { useId } from "react";

const ListadoPacientes = ({ patients = [] }) => {
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
        <p className=" font-semibold mx-12 text-gray-700">
          Aquí apareceran los pacientes
        </p>
      )}
      {patients.map((patient) => {
        return <Paciente key={patient.id} {...patient} />;
      })}
    </div>
  );
};

export default ListadoPacientes;
