import React from 'react';
import { Section1Container, ContentContainer, Content, Image, Title, Paragraph, Button } from '../styles/components/Section1Styles';
import sampleImage from '../assets/sample-image-sec1.jpg'; 
import { MdArrowOutward } from "react-icons/md";

const Section1 = () => {
  return (
    <Section1Container>
      <ContentContainer>
        <Content>
          <Title>Apoie o projeto Resgate</Title>
          <Paragraph>
            Junte-se a nós para construir um refúgio para aqueles que precisam! Vamos mudar vidas, transformar histórias e restaurar famílias com fé, foco e determinação. O seu apoio fará a diferença na vida de dependentes químicos e mulheres em situação de vulnerabilidade, através da nossa vida Deus vai resgatar milhões de outras vidas.
          </Paragraph>
          <Button>QUERO FAZER PARTE  <i><MdArrowOutward /></i></Button>
        </Content>
        <Image src={sampleImage} alt="Sample Image" />
      </ContentContainer>
    </Section1Container>
  );
}

export default Section1;
