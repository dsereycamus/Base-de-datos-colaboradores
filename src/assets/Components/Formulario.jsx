import { useState } from "react";
import { Form, Button, Stack } from "react-bootstrap";

const Formulario = ({ agregarColaborador }) => {
  const [valid, setValid] = useState({
    nombre: false,
    correo: false,
    edad: false,
    cargo: false,
    telefono: false,
  });
  const [nuevoColaborador, setNuevoColaborador] = useState({
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValid({ ...valid, [name]: value.length === 0 });
    setNuevoColaborador({ ...nuevoColaborador, [name]: value });
  };

  const handlePhoneChange = (e) => {
    const { name, value } = e.target;
    if (value.length > 9) {
      e.preventDefault();
      return;
    }
    setValid({ ...valid, [name]: value.length === 0 });
    setNuevoColaborador({ ...nuevoColaborador, [name]: value });
  };

  const handleAgeChange = (e) => {
    const { name, value } = e.target;
    if (value.length > 3 || parseInt(value) > 100) {
      e.preventDefault();
      return;
    }
    setValid({ ...valid, [name]: value.length === 0 });
    setNuevoColaborador({ ...nuevoColaborador, [name]: value });
  };

  const validate = () => {
    const validObject = valid;
    Object.keys(valid).map((name) => {
      const value = nuevoColaborador[name].length === 0;
      setValid({ ...valid, [name]: value });
      validObject[name] = value;
    });

    return validObject;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validObject = validate();
    if (Object.values(validObject).includes(true)) {
      agregarColaborador(undefined);
      return;
    }
    agregarColaborador(nuevoColaborador);
    setNuevoColaborador({
      nombre: "",
      correo: "",
      edad: "",
      cargo: "",
      telefono: "",
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={3}>
        <h3>Agregar colaborador</h3>
        <Form.Group controlId="formNombre">
          <Form.Label style={{ fontWeight: 600 }}>
            Nombre del colaborador
          </Form.Label>
          <Form.Control
            type="text"
            name="nombre"
            placeholder="Ingresa el nombre"
            value={nuevoColaborador.nombre}
            onChange={handleInputChange}
            isInvalid={valid.nombre}
          />
          <Form.Control.Feedback type="invalid">
            Debes ingresar un nombre.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formCorreo">
          <Form.Label style={{ fontWeight: 600 }}>
            Correo del colaborador
          </Form.Label>
          <Form.Control
            type="email"
            name="correo"
            placeholder="Ingrese un email"
            value={nuevoColaborador.correo}
            onChange={handleInputChange}
            isInvalid={valid.correo}
          />
          <Form.Control.Feedback type="invalid">
            Debes ingresar un correo.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formEdad">
          <Form.Label style={{ fontWeight: 600 }}>
            Edad del colaborador
          </Form.Label>
          <Form.Control
            type="number"
            name="edad"
            placeholder="Ingrese la edad"
            value={nuevoColaborador.edad}
            onChange={handleAgeChange}
            isInvalid={valid.edad}
          />
          <Form.Control.Feedback type="invalid">
            Debes ingresar una edad.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formCargo">
          <Form.Label style={{ fontWeight: 600 }}>
            Cargo del colaborador
          </Form.Label>
          <Form.Control
            type="text"
            name="cargo"
            placeholder="Ingrese un cargo para el colaborador"
            value={nuevoColaborador.cargo}
            onChange={handleInputChange}
            isInvalid={valid.cargo}
          />
          <Form.Control.Feedback type="invalid">
            Debes ingresar un cargo.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formTelefono">
          <Form.Label style={{ fontWeight: 600 }}>
            Teléfono del colaborador
          </Form.Label>
          <Form.Control
            type="number"
            maxLength={9}
            name="telefono"
            placeholder="Ingrese un teléfono de 9 dígitos"
            value={nuevoColaborador.telefono}
            onChange={handlePhoneChange}
            isInvalid={valid.telefono}
          />
          <Form.Control.Feedback type="invalid">
            Debes ingresar un número de teléfono.
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit">
          Agregar Colaborador
        </Button>
      </Stack>
    </Form>
  );
};

export default Formulario;
