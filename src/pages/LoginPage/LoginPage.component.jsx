import React from "react";
import {
  Container,
  Wrapper,
  Title,
  Form,
  InputContainer,
  Input,
  Link,
  Button,
} from "./LoginPage.styles";

const LoginPage = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <Form>
          <InputContainer>
            <Input placeholder="username"></Input>
            <Input placeholder="password"></Input>
          </InputContainer>
          <Button>Login</Button>
          <Link>Do not remember your password?</Link>
          <Link>Create new account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default LoginPage;
