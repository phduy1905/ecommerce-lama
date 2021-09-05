import React from "react";
import {
  Container,
  Left,
  Right,
  Center,
  Logo,
  Desc,
  SocialContainer,
  SocialIcon,
  Title,
  List,
  ListItem,
  ContactItem,
  Payment,
} from "./Footer.styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import PinterestIcon from "@material-ui/icons/Pinterest";
import RoomIcon from "@material-ui/icons/Room";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
export const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>LAMA.</Logo>
        <Desc>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia ea sed
          ipsam nam inventore voluptates deleniti explicabo laborum impedit
          perspiciatis.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color="E60023">
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <RoomIcon />
          622 Dixie Path, South Tobinchester 98366
        </ContactItem>
        <ContactItem>
          <PhoneIcon />
          +81 96 966 3930
        </ContactItem>
        <ContactItem>
          <MailIcon />
          contact@lama.dev.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"></Payment>
      </Right>
    </Container>
  );
};
