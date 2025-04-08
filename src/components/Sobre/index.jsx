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
        <ListGroupItemHeading style={{ color: "#92e3c9" }}>
          Sobre a CUP
        </ListGroupItemHeading>
        <ListGroupItem style={{ border: "none" }}>
          <ListGroupItemText
            style={{
              display: "flex",
              borderRadius: "6px",
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
      <Container
        style={{
          textAlign: "center",
          fontSize: "36px",
          borderBottom: "solid 2px #d9d5d5",
          color: "#92e3c9",
          width: "fit-content",
        }}
      >
        Missão, Visão e Valores
      </Container>
      <ListGroup style={{ marginTop: "18px" }}>
        <ListGroupItemHeading style={{ color: "#92e3c9" }}>
          Nossa missão com os animais
        </ListGroupItemHeading>
        <ListGroupItem style={{ border: "none" }}>
          <ListGroupItemText
            style={{
              display: "flex",
              borderRadius: "6px",
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
        {/* visao */}
        <ListGroupItemHeading style={{ color: "#92e3c9" }}>
          Nossa visão
        </ListGroupItemHeading>
        <ListGroupItem style={{ border: "none" }}>
          <ListGroupItemText
            style={{
              display: "flex",
              borderRadius: "6px",
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
        <ListGroupItemHeading style={{ color: "#92e3c9" }}>
          Nossos valores
        </ListGroupItemHeading>
        <ListGroupItem style={{ border: "none" }}>
          <ListGroup
            style={{
              display: "flex",
              borderRadius: "6px",
              // backgroundColor: "#c2e1d7",
              fontSize: "20px",
              padding: "6px",
              flexDirection: "column",
            }}
          >
            <ListGroupItem>
              <strong>Responsabilidade:</strong> Incentivar a posse responsável
              e a proteção dos animais.
            </ListGroupItem>
            <ListGroupItem>
              <strong>Compromisso:</strong> Atuar de forma ética e dedicada para
              garantir a segurança dos pets.
            </ListGroupItem>
            <ListGroupItem>
              <strong>Bem-estar animal:</strong> Promover ações que assegurem
              melhores condições de vida para os animais.
            </ListGroupItem>
            <ListGroupItem>
              <strong>Transparência:</strong> Oferecer um serviço confiável e
              acessível para a identificação de tutores.
            </ListGroupItem>
            <ListGroupItem>
              <strong>Educação e conscientização:</strong> Sensibilizar a
              sociedade sobre a importância do cuidado com os animais.
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </>
  );
}
