import React from "react";
import { Container, Image, Info, Title, Button } from "./CategoryItem.styles";

export default function CategoryItem({ category }) {
  const { img, title } = category;
  return (
    <Container>
      <Image src={img} />
      <Info>
        <Title>{title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
}
