import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import {
  Container,
  Arrow,
  Wrapper,
  ImgContainer,
  InfoContainer,
  Slide,
  Image,
  Title,
  Desc,
  Button,
} from "./Slider.styles";
import { sliderItems } from "../../data";

export const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      let newIndex = slideIndex - 1;
      if (newIndex < 0) {
        newIndex = sliderItems.length - 1;
      }
      setSlideIndex(newIndex);
    }

    if (direction === "right") {
      let newIndex = slideIndex + 1;
      if (newIndex > sliderItems.length - 1) {
        newIndex = 0;
      }
      setSlideIndex(newIndex);
    }
  };

  return (
    <Container>
      <Arrow side="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>

      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => {
          const { id, img, title, desc, bg } = item;
          return (
            <Slide bg={bg} key={id}>
              <ImgContainer>
                <Image src={img} />
              </ImgContainer>
              <InfoContainer>
                <Title>{title}</Title>
                <Desc>{desc}</Desc>
                <Button>SHOP NOW</Button>
              </InfoContainer>
            </Slide>
          );
        })}
      </Wrapper>

      <Arrow side="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};
