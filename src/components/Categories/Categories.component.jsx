import React from "react";
import { categories } from "../../data";
import { Container } from "./Categories.styles";
import CategoryItem from "../CategoryItem/CategoryItem.component";

export const Categories = () => {
  return (
    <Container>
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </Container>
  );
};
