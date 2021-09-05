import { Add, Remove } from "@material-ui/icons";
import React from "react";
import { Announcement, Footer, Navbar } from "../../components";
import {
  Container,
  Wrapper,
  Title,
  Top,
  Bottom,
  TopButton,
  TopText,
  TopTexts,
  Info,
  Summary,
  Product,
  ProductDetail,
  Image,
  Details,
  ProductName,
  ProductSize,
  ProductId,
  PriceDetail,
  ProductColor,
  ProductAmount,
  ProductAmountContainer,
  ProductPrice,
  Hr,
  SummaryTitle,
  SummaryItem,
  SummaryItemPrice,
  SummaryItemText,
  Button,
} from "./CartPage.styles";

const CartPage = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopTexts>
            <TopText>Shopping Bag (2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">Checkout now</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="data:image/jpeg;base64,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" />
                <Details>
                  <ProductName>
                    <b>Product: </b>JESSIE THUNDER STORE
                  </ProductName>
                  <ProductId>
                    <b>ID: </b>91235123
                  </ProductId>
                  <ProductSize>
                    <b>Size: </b> 37.5
                  </ProductSize>
                  <ProductColor color="white" />
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$30</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://cdn2.stylicy.com/global/image-5778-176567510-1-big-hr.jpg" />
                <Details>
                  <ProductName>
                    <b>Product: </b>CONVERSE SWEATSHIRT
                  </ProductName>
                  <ProductId>
                    <b>ID: </b>5125123
                  </ProductId>
                  <ProductSize>
                    <b>Size: </b> L
                  </ProductSize>
                  <ProductColor color="black" />
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$30</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$80</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECK OUT</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default CartPage;
