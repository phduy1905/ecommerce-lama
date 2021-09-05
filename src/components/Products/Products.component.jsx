import React from "react";
import { Container } from "./Products.styles";
import { popularProducts } from "../../data";
import ProductItem from "../ProductItem/ProductItem.component";

export const Products = () => {
  return (
    <Container>
      {popularProducts.map((product) => {
        return <ProductItem key={product.id} product={product} />;
      })}
    </Container>
  );
};
