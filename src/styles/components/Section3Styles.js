// Estilos para a Section3
import styled from 'styled-components';

export const Section3Container = styled.section`
  background-color: #f0f0f0;
  padding: 40px;
  text-align: left;
  padding: 1% 10%; 
`;

export const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
  font-weight: normal;
`;

export const Paragraph = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ListItem = styled.li`
  font-size: 18px;
  margin-bottom: 10px;
  width: calc(50% - 10px); /* Define a largura de cada card com base na largura da seção e no espaçamento entre eles */
  background-color: #fff; /* Fundo branco para os cards */
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Sombra para os cards */
  margin-bottom: 20px; /* Espaçamento entre os cards */
`;

