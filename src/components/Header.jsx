import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faBolt } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <Navbar variant="light">
      <Navbar.Brand href="#home">
        It's me &nbsp;
        <FontAwesomeIcon icon={faBolt} />
      </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#skill">Skill</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav>
    </Navbar>
  );
}
