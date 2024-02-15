// styles/components/Section1Styles.js
import styled from 'styled-components';

export const Section1Container = styled.section`
  background-color: #f0f0f0;
  padding: 40px;
  text-align: center;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Content = styled.div`
  width: 50%; /* Ocupa metade da largura da seção */
  text-align: left; /* Alinha o conteúdo à esquerda */
`;

export const Image = styled.img`
  width: 50%;
  height: auto;
  border
`;

export const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
`;

export const Paragraph = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
`;
