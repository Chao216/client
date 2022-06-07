import "./App.css";
import { Row, Col } from "react-bootstrap";

import Container from "react-bootstrap/Container";
import Avator from "./components/Avator";
import Header from "./components/Header";
import TextBlock from "./components/TextBlock";
import Foto from "./components/Foto";
import SlideShow from "./components/SlideShow";
import Kard from "./components/Kard";
import { music, me } from "./info";
import Skill from "./components/Skill";
import Contact from "./components/Contact";

function App() {
  return (
    <Container>
      <Header></Header>
      <h3>Hello, thanks for visiting this page. 😀</h3>
      <br />

      <Avator></Avator>
      <br />
      <TextBlock title={me[0].title} content={me[0].text}></TextBlock>
      <div className="bottomSpace">
        <Foto path="./images/wuzhen.jpeg" alt="a photo of wuzhen"></Foto>
      </div>

      <TextBlock title={me[1].title} content={me[1].text}>
        >
      </TextBlock>
      <div className="bottomSpace">
        <SlideShow></SlideShow>
      </div>

      <TextBlock title={me[2].title} content={me[2].text}></TextBlock>
      <div className="bottomSpace">
        <Row>
          {music.map((item) => {
            return (
              <Col>
                <Kard
                  path={item.path}
                  title={item.title}
                  text={item.text}
                ></Kard>
              </Col>
            );
          })}
        </Row>
      </div>
      <TextBlock title={me[3].title} content={me[3].text}></TextBlock>
      <div className="bottomSpace">
        <Skill></Skill>
      </div>
      <TextBlock title={me[4].title} content={me[4].text}></TextBlock>
      <Contact></Contact>
    </Container>
  );
}

export default App;
