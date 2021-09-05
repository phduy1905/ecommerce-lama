import React from "react";
import {
  Container,
  Wrapper,
  Title,
  Form,
  InputContainer,
  Input,
  Agreement,
  Button,
} from "./RegisterPage.styles";

const RegisterPage = () => {
  return (
    <Container>
      <Wrapper>
        <Title>create an account</Title>
        <Form>
          <InputContainer>
            <Input placeholder="name"></Input>
            <Input placeholder="last name"></Input>
            <Input placeholder="username"></Input>
            <Input placeholder="email"></Input>
            <Input placeholder="password"></Input>
            <Input placeholder="confirm password"></Input>
          </InputContainer>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the
            <strong> PRIVACY POLICY</strong>
          </Agreement>
          <Button>create</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default RegisterPage;
