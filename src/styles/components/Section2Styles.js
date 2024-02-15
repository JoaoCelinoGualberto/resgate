// styles/components/Section2Styles.js
import styled from 'styled-components';

export const Section2Container = styled.section`
  background-color: #000; 
  padding: 40px;
  text-align: center;
  padding: 1% 10%; 
`;

export const Title = styled.h2`
  font-size: 23px; 
  margin-bottom: 30px; 
  font-weight: 500;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const ListItem = styled.li`
  font-size: 20px; 
  margin-bottom: 20px; 
  width: calc(20% - 17px); 
  background-color: #FFCCBC; /* Cor de fundo */
  padding: 20px;
  border-radius: 20px; /* Borda arredondada */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Sombra */
  transition: transform 0.3s ease; /* Transição suave do tamanho */
  overflow: hidden; /* Oculta conteúdo fora da borda inclinada */
  
  &:hover {
    transform: translateY(-10px); /* Eleva o card no hover */
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #FF7043; /* Cor da borda inclinada */
    transform-origin: bottom right;
    transform: skewX(-15deg); /* Inclinação para a esquerda */
    z-index: -1; /* Coloca a borda atrás do conteúdo */
  }
`;

export const ListItemContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
