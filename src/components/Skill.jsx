import Logo from "./Logo";
import { Row, Col } from "react-bootstrap";
import { skill } from "../info";
export default function Skill() {
  return (
    <Row>
      {skill.map((item) => {
        return (
          <Col lg="3">
            <Logo path={item.path} alt={item.alt}></Logo>
          </Col>
        );
      })}
    </Row>
  );
}
