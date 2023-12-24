import { useState } from "react";
import { BaseColaboradores } from "./assets/Components/BaseColaboradores";
import Listado from "./assets/Components/Listado";
import Formulario from "./assets/Components/Formulario";
import Buscador from "./assets/Components/Buscador";
import Alert from "./assets/Components/Alert";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Stack, Row, Col } from "react-bootstrap";

const App = () => {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");

  const agregarColaborador = (nuevoColaborador) => {
    if (nuevoColaborador !== undefined) {
      setColaboradores([...colaboradores, nuevoColaborador]);
      setAlertMessage("Colaborador agregado exitosamente.");
      setAlertType("success");
    } else {
      setAlertMessage("Todos los campos son obligatorios.");
      setAlertType("danger");
    }
  };

  const buscarColaboradores = (busqueda) => {
    const resultadoBusqueda = BaseColaboradores.filter((colaborador) =>
      Object.values(colaborador).some(
        (valor) =>
          typeof valor === "string" &&
          valor.toLowerCase().includes(busqueda.toLowerCase())
      )
    );

    setColaboradores(resultadoBusqueda);
  };

  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter(
      (colaborador) => colaborador.id !== id
    );
    setColaboradores(nuevosColaboradores);
  };

  return (
    <Container>
      <Alert message={alertMessage} type={alertType} />
      <Row>
        <Col sm={12} xl={8}>
          <Stack gap={3}>
            <Buscador buscarColaboradores={buscarColaboradores} />
            <Listado
              colaboradores={colaboradores}
              eliminarColaborador={eliminarColaborador}
            />
          </Stack>
        </Col>
        <Col sm={12} xl={4}>
          <Formulario agregarColaborador={agregarColaborador} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
