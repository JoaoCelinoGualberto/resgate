// styles/components/Section1Styles.js
import styled from "styled-components";

export const Section1Container = styled.section`
  background: linear-gradient(to bottom, #ffffff, #ffccbc);
  padding: 5% 10%; /* Ajuste do padding para telas menores */
  text-align: center;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column; /* Alterado para empilhar conteúdo em telas menores */
  align-items: center; /* Centralizar conteúdo na tela */
`;

export const Content = styled.div`
  width: 100%; /* Alterado para ocupar toda a largura disponível */
  max-width: 600px; /* Limitando a largura do conteúdo */
  text-align: center;
  margin-bottom: 20px; /* Adicionado espaço inferior */
`;

export const Image = styled.img`
  width: 100%; /* Alterado para ocupar toda a largura disponível */
  max-width: 600px; /* Limitando a largura da imagem */
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

  