import styled from "styled-components";

export const Section5Container = styled.section`
  background-color: #f0f0f0;
  padding: 1% 10%;
  text-align: justify;
  display: flex;
  flex-direction: column; /* Organiza os elementos em coluna */
  align-items: center; /* Centraliza os elementos horizontalmente */
  max-width: 100vw; /* Largura máxima da seção */
  margin: 0 auto; /* Centralizar na tela */
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const TextContainer = styled.div`
  width: 100%;
 max-width: 800px; /* Largura máxima do texto */
`;

export const Paragraph = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;


export const Button = styled.button`
  background-color: transparent;
  color: #ff7043;
  padding: 8px 16px; /* Aumentando o espaço interno do botão para melhor legibilidade */
  border: 1px solid #ff7043;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 10px; /* Adicionando espaço superior para o botão */
`;
