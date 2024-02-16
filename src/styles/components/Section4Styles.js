import styled from 'styled-components';

export const Section4Container = styled.section`
  background-color: #f0f0f0;
  padding: 40px;
  padding: 5% 10%; 
  text-align: justify;
  display: flex;
  flex-direction: column; /* Organiza os elementos em coluna */
  align-items: center; /* Centraliza os elementos horizontalmente */
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const ImageContainer = styled.div`
  width: 100%;
  max-width: 300px; /* Largura máxima da imagem */
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 15px 50px 15px 50px;
`;

export const TextContainer = styled.div`
  width: 100%;
  max-width: 600px; /* Largura máxima do texto */
`;

export const Paragraph = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;
