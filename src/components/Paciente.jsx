import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const Paciente = ({
  id,
  nombre,
  propietario,
  email,
  fecha,
  sintomas,
  setPatientForm,
  setPatients,
}) => {
  const handleEdit = () => {
    setPatientForm({ id, nombre, propietario, email, fecha, sintomas });
  };

  const handleDelete = () => {
    Swal.fire({
      title: "Desea eliminarlo?",
      text: "Recuerde que esta acción no se puede revertir",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, quiero eliminarlo!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Eliminado!",
          `El paciente ${nombre} ha sido eliminado`,
          "success"
        );
        setPatients((prevPatient) =>
          prevPatient.filter((patient) => patient.id != id)
        );
      }
    });
  };

  return (
    <div className="bg-white m-3 p-3 rounded">
      <p className="font-bold text-gray-700 uppercase mb-1.5">
        Nombre Mascota:
        <span className="font-normal normal-case"> {nombre}</span>
      </p>
      <p className="font-bold text-gray-700 uppercase mb-1.5">
        Propietario:
        <span className="font-normal normal-case"> {propietario}</span>
      </p>
      <p className="font-bold text-gray-700 uppercase mb-1.5">
        Email
        <span className="font-normal normal-case"> {email}</span>
      </p>
      <p className="font-bold text-gray-700 uppercase mb-1.5">
        Fecha alta
        <span className="font-normal normal-case"> {fecha}</span>
      </p>
      <p className="font-bold text-gray-700 uppercase mb-1.5">
        Sintomas
        <span className="font-normal normal-case"> {sintomas}</span>
      </p>
      <div className="my-4">
        <button
          type="button"
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded
          mr-4"
          onClick={handleEdit}
        >
          EDITAR
        </button>
        <button
          type="button"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleDelete}
        >
          ELIMINAR
        </button>
      </div>
    </div>
  );
};

export default Paciente;
