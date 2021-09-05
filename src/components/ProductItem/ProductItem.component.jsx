import React from "react";
import { Container, Img, ButtonsContainer, Icon } from "./ProductItem.styles";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";

const ProductItem = ({ product }) => {
  const { img } = product;
  return (
    <Container>
      <Img src={img} />
      <ButtonsContainer>
        <Icon>
          <SearchOutlinedIcon />
        </Icon>
        <Icon>
          <FavoriteBorderOutlinedIcon />
        </Icon>
        <Icon>
          <ShoppingCartOutlinedIcon />
        </Icon>
      </ButtonsContainer>
    </Container>
  );
};

export default ProductItem;
