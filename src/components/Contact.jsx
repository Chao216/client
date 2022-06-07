import { contact } from "../info";
import { Col, Row } from "react-bootstrap";
import Logo from "./Logo";
export default function Contact() {
  return (
    <Row>
      {contact.map((item) => {
        return (
          <Col lg="6" style={{ textAlign: "center" }}>
            <a href={item.href}>
              <Logo path={item.path} alt={item.alt}></Logo>
            </a>
          </Col>
        );
      })}
    </Row>
  );
}
