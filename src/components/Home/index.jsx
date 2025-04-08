import { useState } from "react";
import {
  Alert,
  Button,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Spinner,
} from "reactstrap";

import { FormsPets } from "../FormsPets/index";

export function Home() {
  const [nome, setNome] = useState("");
  const [tutor, setTutor] = useState("");
  const [idade, setIdade] = useState(0);
  const [email, setEmail] = useState("");
  const [sexo, setSexo] = useState([""]);
  const [tipo, setTipo] = useState([""]);
  const [touched, setTouched] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [, setParams] = useState("");

  const reset = () => {
    setNome("");
    setTutor("");
    setIdade(0);
    setEmail("");
    setSexo("");
    setTipo("");
  };

  async function handleSubmit() {
    try {

      if (!nome || !tutor || !idade || !email || !sexo || !tipo) {
        alert('Hou erro na hora de cadastrar o pet');
        return;
      }

      const params = {
        nome,
        tutor,
        idade,
        sexo,
        tipo,
        email,
      };

      await new Promise((resolve) => setTimeout(resolve, 1000));

      setShowAlert(true);
      setParams(params);
      setTimeout(() => setShowAlert(false), 6000);
      reset();
    } catch (error) {
      throw new Error("Erro ao dar submit nos dados", error);
    }
  }

  return (
    <>
      <h3 className="color-dark p-4">Ficha de cadastro</h3>
      <Form>
        <FormGroup>
          <Label for="nome">Nome: </Label>
          <Input
            invalid={touched && nome === ""}
            placeholder="Digite o nome do pet"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="nome">Nome do tutor: </Label>
          <Input
            invalid={touched && tutor === ""}
            placeholder="Digite o nome do tutor"
            value={tutor}
            onChange={(e) => setTutor(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="nome">E-Mail: </Label>
          <Input
            invalid={touched && email.trim() === ""}
            placeholder="Digite o email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup style={{ width: "100px" }}>
          <Label for="nome">Idade: </Label>
          <Input
            invalid={touched && idade.trim() === ""}
            placeholder="Digite a idade"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
          />
        </FormGroup>
        <FormsPets />
      </Form>

      <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
        <Button
          onClick={handleSubmit}
          style={{ borderRadius: "6px" }}
          size="20px"
          color="success"
          disabled={loading}
        >
        Confirmar
        </Button>
        <Button style={{ borderRadius: "6px" }} size="20px" color="danger">
          Cancelar
        </Button>
      </div>

      <div>
        {showAlert && (
          <Modal isOpen={showAlert}>
            <ModalHeader style={{ textAlign: 'center' }}>Ficha finalizada</ModalHeader>
            <ModalBody>
              <Alert>
                <h4 className="alert-heading">
                  Cadastro realizado com sucesso
                </h4>
                <p>O cadastro do pet foi realizado com sucesso</p>
                <hr />
                <p className="mb-0">
                  Muito obrigado por contribuir com a causa
                </p>
              </Alert>
            </ModalBody>
            <ModalFooter></ModalFooter>
          </Modal>
        )}
      </div>
    </>
  );
}
