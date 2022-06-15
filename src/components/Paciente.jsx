const Paciente = ({ nombre, propietario, email, fecha, sintomas }) => {
  return (
    <div className="bg-white m-3 p-3 rounded">
      <p className="font-bold text-gray-700 uppercase mb-1.5">
        Nombre:
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
    </div>
  );
};

export default Paciente;
