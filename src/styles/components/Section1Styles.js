// styles/components/Section1Styles.js
import styled from "styled-components";

export const Section1Container = styled.section`
  position: relative; /* Define o contexto de posicionamento */
  background: linear-gradient(to bottom, #ffffff, #ffccbc);
  padding: 1% 10%; /* Ajuste do padding para telas menores */
  max-width: 100vw; /* Largura máxima da seção */
  margin: 0 auto; /* Centralizar na tela */
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centralizar o conteúdo horizontalmente */
  text-align: center;
`;

export const Content = styled.div`
 max-width: 800px; /* Limitando a largura do conteúdo */
  margin: 0 auto; /* Centralizar o conteúdo horizontalmente */
`;

export const ImageContainer = styled.div`
  width: 100%;
`;

export const Image = styled.img`
  width: 100%; /* Alterado para ocupar toda a largura disponível */
 max-width: 800px; /* Limitando a largura da imagem */
  height: auto;
  border-radius: 15px 50px 15px 50px;
`;

export const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
  font-weight: 500;
`;

export const Paragraph = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  text-align: justify;
`;
