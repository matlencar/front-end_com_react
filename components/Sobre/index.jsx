import {
    Container,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from "reactstrap";

export function Sobre() {
  return (
    <>
      {/* <h2>Pets - Sobre</h2>   */}
      <ListGroup style={{ marginTop: "18px" }}>
        <ListGroupItemHeading>Sobre a CUP</ListGroupItemHeading>
        <ListGroupItem style={{ border: "none" }}>
          <ListGroupItemText
            style={{
              display: "flex",
              borderRadius: "4px",
              backgroundColor: "#c2e1d7",
              fontSize: "20px",
              padding: "6px",
            }}
          >
            O Cadastro Único de Pets (CUP) foi criado para registrar os animais
            de estimação e seus respectivos donos, garantindo maior proteção
            para os pets. Em casos de maus-tratos ou abandono, o responsável
            pelo animal poderá ser identificado e notificado, podendo sofrer
            penalidades legais. Dessa forma, o CUP contribui para a segurança e
            bem-estar dos animais, assegurando que os tutores sejam
            responsabilizados por seus cuidados e possam estar sujeitos a multas
            e até prisão, caso negligenciem suas responsabilidades.
          </ListGroupItemText>
        </ListGroupItem>
      </ListGroup>
        <Container style={{ textAlign: "center" }}>MIssão Visão e Valores</Container>
      <ListGroup style={{ marginTop: "18px" }}>
        <ListGroupItemHeading>Nossa missão com os animais</ListGroupItemHeading>
        <ListGroupItem style={{ border: "none" }}>
          <ListGroupItemText
            style={{
              display: "flex",
              borderRadius: "4px",
              backgroundColor: "#c2e1d7",
              fontSize: "20px",
              padding: "6px",
            }}
          >
            Garantir a segurança e o bem-estar dos animais de estimação por meio
            de um registro único, promovendo a identificação dos tutores e a
            responsabilidade na posse dos pets.
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItemHeading>Nossa visão</ListGroupItemHeading>
        <ListGroupItem style={{ border: "none" }}>
          <ListGroupItemText
            style={{
              display: "flex",
              borderRadius: "4px",
              backgroundColor: "#c2e1d7",
              fontSize: "20px",
              padding: "6px",
            }}
          >
            Ser a principal plataforma de registro de animais de estimação,
            contribuindo para a redução do abandono e dos maus-tratos, e
            incentivando uma cultura de proteção e respeito aos animais.
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItemHeading>Nossos valores</ListGroupItemHeading>
        <ListGroupItem style={{ border: "none" }}>
          <ListGroupItemText
            style={{
              display: "flex",
              borderRadius: "4px",
              backgroundColor: "#c2e1d7",
              fontSize: "20px",
              padding: "6px",
            }}
          >
            Responsabilidade – Incentivar a posse responsável e a proteção dos
            animais. <br/>
            Compromisso – Atuar de forma ética e dedicada para garantir
            a segurança dos pets. <br/>
            Bem-estar animal – Promover ações que
            assegurem melhores condições de vida para os animais. <br/>
            Transparência – Oferecer um serviço confiável e acessível para a identificação de
            tutores. <br/>
            Educação e conscientização – Sensibilizar a sociedade sobre a importância do cuidado com os animais.
          </ListGroupItemText>
        </ListGroupItem>
      </ListGroup>
    </>
  );
}
