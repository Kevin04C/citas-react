import { useEffect, useState } from "react";
import ErrorForm from "./ErrorForm";

const Formulario = ({ setPatients, patients = [], patientForm }) => {
  const initialState = {
    nombre: "",
    propietario: "",
    email: "",
    fecha: "",
    sintomas: "",
  };
  const [stateForm, setStateForm] = useState(initialState);
  const [emptyForm, setIsEmpty] = useState(false);

  const { nombre, email, fecha, propietario, sintomas } = stateForm;

  useEffect(() => {
    if (Object.keys(patientForm).length > 0) {
      setStateForm(patientForm);
    }
    console.log(patientForm.id);
  }, [patientForm]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !nombre.trim() ||
      !email.trim() ||
      !fecha.trim() ||
      !propietario.trim() ||
      !sintomas.trim()
    ) {
      setIsEmpty(true);
      return;
    }
    setIsEmpty(false);
    if (patientForm.id) {
      const updatePatients = patients.map((patient) =>
        stateForm.id === patient.id ? stateForm : patient
      );
      setPatients(updatePatients);
    } else {
      const newPatient = {
        ...stateForm,
        id: generateId(),
      };
      setPatients([...patients, newPatient]);
    }
    setStateForm(initialState);
  };

  const generateId = () => {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  };

  const handleInputChange = (e) => {
    setStateForm({
      ...stateForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-3">
      <h2 className="font-medium text-black text-3xl text-center">
        Seguimiento pacientes
      </h2>
      <p className="text-lg my-4 text-center">
        Añande pacientes
        <span className="text-indigo-400 font-bold"> Administralos</span>
      </p>
      <form className="bg-white shadow-md p-4 rounded-md mb-10">
        {emptyForm && <ErrorForm msg="¡Rellene todos los campos!" />}

        <div className="mb-3">
          <label
            className="block text-gray-700 font-bold uppercase mb-2"
            htmlFor="nombre"
          >
            Nombre mascota
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            className="border-2 w-full p-2 placeholderbg-gray-700 rounded"
            placeholder="Nombre de la mascota"
            value={nombre}
            autoComplete="off"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label
            className="block text-gray-700 font-bold uppercase mb-2"
            htmlFor="propietario"
          >
            Nombre del propietario
          </label>
          <input
            type="text"
            id="propietario"
            name="propietario"
            value={propietario}
            onChange={handleInputChange}
            className="border-2 w-full p-2 placeholderbg-gray-700 rounded"
            placeholder="Nombre del propietario"
          />
        </div>
        <div className="mb-3">
          <label
            className="block text-gray-700 font-bold uppercase mb-2"
            htmlFor="email"
          >
            email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            autoComplete="off"
            className="border-2 w-full p-2 placeholderbg-gray-700 rounded "
            placeholder="Email contacto propietario"
          />
        </div>
        <div className="mb-3">
          <label
            className="block text-gray-700 font-bold uppercase mb-2"
            htmlFor="alta"
          >
            Alta
          </label>
          <input
            type="date"
            id="alta"
            name="fecha"
            value={fecha}
            onChange={handleInputChange}
            className="border-2 w-full p-2 placeholderbg-gray-700 rounded"
          />
        </div>
        <div className="mb-3">
          <label
            className="block text-gray-700 font-bold uppercase mb-2"
            htmlFor="sintomas"
          >
            Sintomas
          </label>
          <textarea
            className="border-2 w-full p-2 placeholderbg-gray-700 rounded resize-none"
            id="sintomas"
            name="sintomas"
            value={sintomas}
            onChange={handleInputChange}
            placeholder="Describe los sintomas"
          />
        </div>
        <input
          type="submit"
          value={patientForm.id ? "Editar Paciente" : "Añadir Paciente"}
          className="bg-indigo-500 text-white font-bold w-full p-3 rounded cursor-pointer text-base hover:bg-indigo-700 transition-all"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
};

export default Formulario;
