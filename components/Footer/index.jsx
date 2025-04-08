import { Container } from "reactstrap";

export function Footer() {

return(
            <footer style={{ backgroundColor: '#52d552', color: '#FFF', padding: '16px', textAlign: 'center' }}>
                <Container>
                    <p className="mb-0">© {new Date().getFullYear()} Infnet - Projeto Final Interfaces</p>                
                </Container>
            </footer>
)
}