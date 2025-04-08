import { useState } from "react";
import { Col, FormGroup, Input, Label } from "reactstrap";

export function FormsPets() {
  const [sexo, setSexo] = useState(["Masculino", "Feminino"]);
  const [tipo, setTipo] = useState(['Cachorro', 'Gato', 'Hamster', 'Peixe', 'Papagaio'])
  return (
    <>
      <FormGroup row>
        <Label for="exampleSelect">Sexo: </Label>
        <Col sm={4}>
          <Input type="select">
            {sexo.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </Input>
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="exampleSelect">Tipo: </Label>
        <Col sm={4}>
          <Input type="select" id="exampleSelect">
            {tipo.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </Input>
        </Col>
      </FormGroup>
    </>
  );
}
