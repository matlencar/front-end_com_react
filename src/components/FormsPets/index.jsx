import { useState, useEffect } from "react";
import { Col, FormGroup, Input, Label } from "reactstrap";

export function FormsPets() {
  const [sexo, setSexo] = useState(['']);
  const [tipo, setTipo] = useState(['']);
  const [error, setError] = useState(null);
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    async function fetchPets() {
      try {
        const response = await fetch("https://api.npoint.io/14eb307afc0fc465fe53");
       
        const data = await response.json();
        console.log("Dados da API:", data);

        if (data.tipo && Array.isArray(data.tipo)) {
          setTipo(data.tipo);
        } else {
          throw new Error("Formato de resposta inválido");
        }

      } catch (error) {
        setError(error.message);
        console.error("Erro ao buscar os dados:", error);
      }
    }

    fetchPets();
  }, []);

  useEffect(() => {
    async function fetchSexo() {
      try {
        const response = await fetch("https://api.npoint.io/06f96c609e9b2faf0d59");

        const data = await response.json()

        if(data.sexo && Array.isArray(data.sexo)) {
          setSexo(data.sexo);
        } else {
          throw new Error("Formato de resposta inválido");
        }
      } catch (error) {
        setError(error.message);
        console.error("Erro ao buscar os dados:", error);
      }
    }
    fetchSexo()
  }, []);

  return (
    <>
      <FormGroup row>
        <Label for="sexoSelect">Sexo: </Label>
        <Col sm={4}>
          <Input invalid={touched && sexo === ''} type="select" id="sexoSelect">
          <option>Selecione o sexo</option>
            {sexo.length > 0 ? (
              sexo.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))
            ) : (
              <option disabled>Carregando...</option>
            )}
          </Input>
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="tipoSelect">Tipo: </Label>
        <Col sm={4}>
          <Input invalid={touched && tipo === ''} type="select" id="tipoSelect">
            <option>Selecione um tipo</option>
            {tipo.length > 0 ? (
              tipo.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))
            ) : (
              <option disabled>Carregando...</option>
            )}
          </Input>
        </Col>
      </FormGroup>
    </>
  );
}
