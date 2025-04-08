import { useState } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input, Button
} from "reactstrap";

import { FormsPets } from '../FormsPets/index'


export function Home() {
    const [nome, setNome] = useState('');
    // const [sexo, setSexo] = useState('');
    // const [tipo, setTipo] = useState('');
    const [email, setEmail] = useState('');
  return (
    <>
    <h3 className="color-dark p-4">Ficha de cadastro</h3>
      <Form>
        <FormGroup>
          <Label for="nome">Nome: </Label>
          <Input
          invalid={nome === '' ? true : false} 
          placeholder="Digite o nome do pet"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          />
        </FormGroup>
        <FormsPets />
        <FormGroup>
        <Label for="nome">E-Mail: </Label>
          <Input
          invalid={email === '' ? true : false} 
          placeholder="Digite o email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
      </Form>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button style={{ borderRadius: '6px'}} size="20px" color="success">
          Confirmar
        </Button>
        <Button style={{ borderRadius: '6px'}} size="20px" color="danger">
          Cancelar
        </Button>
      </div>
    </>
  );
}
