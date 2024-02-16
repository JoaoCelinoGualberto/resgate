import React from "react";
import {
  Section5Container,
  Paragraph,
  Button,
  TextContainer,
} from "../styles/components/Section5Styles";

const Section5 = () => {
  return (
    <Section5Container>
      <TextContainer>
        <Paragraph>
          "Missão se faz com os joelhos de quem ora, com os pés de quem vai e com
          o dinheiro de quem investe."
        </Paragraph>
      </TextContainer>
      <Button>SALVE VIDAS</Button>
    </Section5Container>
  );
};

export default Section5;
