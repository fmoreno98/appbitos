import React, { useState, useRef, useEffect, useContext } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import "./BotonesGrid.css";
import BotonCrear from "./BotonCrear";
import "./BotonCrear.css";
import HabitoEspecifico from "./HabitoEspecifico";
import LoginContext from "./LoginContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { obtenerHabitos3 } from "./tools/api";

const BotonesGrid = (props) => {
    const [buttons, setButtons] = useState([]);
    const [progress, setProgress] = useState(0);
    const [habitos, setHabitos] = useState([]);
    const [refrescar, setRefrescar] = useState(0)
    const addButtonRef = useRef(null);
    const { user, token } = useContext(LoginContext);

  // Maneja la adición de un nuevo botón
  const handleAddButton = () => {
    setButtons([...buttons, `Button ${buttons.length + 1}`]); // Agrega un nuevo botón
  };

  // Divide los botones en grupos de 2
  const buttonRows = [];
  for (let i = 0; i < buttons.length; i += 2) {
    // buttonRows.push(buttons.slice(i, i + 2));
  }

  // Asegúrate de que siempre haya un lugar para el botón de creación al final
  if (
    buttonRows.length === 0 ||
    buttonRows[buttonRows.length - 1].length === 2
  ) {
    buttonRows.push([]);
  }

  useEffect(() => {
    if (addButtonRef.current) {
      // Desplazar hacia el botón con un margen adicional
      const offset = 100; // Ajusta este valor según el margen que necesites
      const element = addButtonRef.current;
      const top = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: top - offset,
        behavior: "smooth",
      });
    }
  }, [buttons]);


  useEffect(() => {
    async function obtenerHabitos() {
      const res = await fetch(
        "http://localhost:3000/api/habitos/" + user + "/usuario",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      const data = await res.json();
      setHabitos(data.data);
    }

    if (user) obtenerHabitos();
  }, [user, refrescar]);


      function refresca(){
        setRefrescar(refrescar+1)
        props.setRefresh(refrescar+1)
      }


  return (
    <Container className="gridBotons">
      <div className="button-grid" id="button-grid">
        {buttonRows.map((row, rowIndex) => (
          <Row key={rowIndex} className="mb-4">
            {habitos.map((habito, index) => (
              <Col xs={6} key={index}>
                <HabitoEspecifico habito={habito} />
                <h5>{habito.nombre_habito} </h5>
              </Col>
            ))}
            {rowIndex === buttonRows.length - 1 && (
              <Col className="d-flex justify-content-right align-items-bottom">
                <Form className="mb-3 botoform">
                  <BotonCrear
                    progress={100}
                    refresca={refresca}
                    creado={handleAddButton}
                    ref={addButtonRef}
                  />
                </Form>
              </Col>
            )}
          </Row>
        ))}
      </div>
    </Container>
  );
};

export default BotonesGrid;
