import { Carousel } from "react-bootstrap";
import { slide } from "../info";

export default function SlideShow(props) {
  return (
    <Carousel>
      {slide.map((item) => {
        return (
          <Carousel.Item className="carouselItem">
            <img
              className="d-block foto toCenter"
              src={item.path}
              alt="slide fig"
            />
            <Carousel.Caption>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
