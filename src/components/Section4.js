import React from 'react';
import { Section4Container, Title, Paragraph, ImageContainer, TextContainer, Image } from '../styles/components/Section4Styles';
import profile from '../assets/pessoa.jpg'; // Importe a imagem usando require

const Section4 = () => {
  return (
    <Section4Container>
      <ImageContainer>
        <Image src={profile} alt="Profile" />
      </ImageContainer>
      <Title>Sobre a Organização</Title>
      
      <TextContainer>
        <Paragraph>
          Eu me chamo Marilene Martins da Silva, tenho 53 anos, durante 10 anos fui dirigente do campo Palmas-TO da Igreja Internacional Rocha Eterna. Há 15 anos recebi uma revelação de Deus que me deu o projeto Resgate. Em 2022 guiada pelas ordens de Deus aceitei cumprir a missão e em março de 2023 me mudei para a Holanda para trabalhar e arrecadar fundos para realizar esse projeto. Diariamente, a muitos anos, meu coração queima por aqueles que estão aprisionados nos vícios e em situação de vulnerabilidade. 
          Durante a jornada já abriguei e ajudei pessoas com dependência química em minha casa. Minha intenção é ajudar a dar um novo sentido para as suas vidas e ensiná-las a buscar a Deus. Durante os acolhimentos, ensinava os acolhidos a  cuidarem de si mesmos e uma maneira de se sustentarem, o principal ensinamento de sustento foi a fabricação e venda de pães. 
          Ajudar pessoas é meu projeto de vida, meu coração anseia ver vidas transformadas, ver os acolhidos com perspectivas, com sonhos e acreditando em si, descobrindo o seu potencial e assim vivendo em novidade de vida.
        </Paragraph>
      </TextContainer>
    </Section4Container>
  );
}

export default Section4;
