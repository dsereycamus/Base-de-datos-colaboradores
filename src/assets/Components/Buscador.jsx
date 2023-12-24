/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

const Buscador = ({ buscarColaboradores }) => {
  const [busqueda, setBusqueda] = useState("");

  const handleInputChange = (e) => {
    setBusqueda(e.target.value);
  };

  useEffect(() => {
    buscarColaboradores(busqueda);
  }, [busqueda]);

  return (
    <Form>
      <h1>Lista de colaboradores</h1>
      <Form.Group controlId="formBusqueda">
        <Form.Label></Form.Label>
        <Form.Control
          type="text"
          placeholder="Busca un colaborador"
          value={busqueda}
          onChange={handleInputChange}
        />
      </Form.Group>
    </Form>
  );
};

export default Buscador;
