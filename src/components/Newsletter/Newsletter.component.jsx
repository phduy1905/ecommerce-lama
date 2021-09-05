import {
  Container,
  Title,
  Desc,
  InputContainer,
  Input,
  Button,
  Send,
} from "./Newsletter.styles";
import SendIcon from "@material-ui/icons/Send";

export const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};
