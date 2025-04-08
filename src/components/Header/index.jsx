import logo from "../../assets/monder_pets.png";

import { Link } from "react-router-dom";
import "./styles.css";

import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";

export function Header() {
  return (
    <>
      <Navbar style={{ backgroundColor: "#52d552" }}>
        <NavbarBrand style={{ color: "#FFFFFF" }}>
          <img src={logo} width="55px;" style={{ paddingRight: "6px" }} />
          Cadastro Unico de Pets - CUP
        </NavbarBrand>
        <Nav className="ms-auto" navbar>
          <NavItem
            style={{
              flexDirection: "row",
              display: "flex",
              justifyContent: "flex-end",
              marginRight: "6px",
              gap: "10px",
            }}
          >
            <NavLink
              className="nav-button"
              tag={Link}
              to="/"
            >
              HOME
            </NavLink>
            <NavLink className="nav-button" tag={Link} to="/pets">
              SOBRE
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </>
  );
}
