import styled from 'styled-components';

export const Section2Container = styled.section`
  background-color: #000; 
  color: #fff;
  padding: 40px;
  text-align: center;
  padding: 1% 10%; 
`;

export const Title = styled.h2`
  font-size: 23px; /* Tamanho do título aumentado */
  margin-bottom: 30px; /* Espaçamento maior abaixo do título */
  font-weight: 500;
`;
export const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex; /* Distribui os itens horizontalmente */
  justify-content: space-around; /* Distribui os itens uniformemente na horizontal */
`;

export const ListItem = styled.li`
  font-size: 20px; /* Tamanho da fonte aumentado */
  margin-bottom: 20px; /* Espaçamento maior entre os itens da lista */
  position: relative; /* Permite o uso de pseudo-elementos */
  cursor: pointer; /* Altera o cursor ao passar sobre os itens */
  transition: color 0.3s ease; /* Transição suave de cor */
  
  &:hover {
    color: #FF7043; /* Muda a cor do texto no hover */
    
    & > div {
      opacity: 1; /* Torna os elementos visíveis no hover */
    }
  }
`;

export const ListItemBackground = styled.div`
  position: absolute; /* Posição absoluta em relação ao item da lista */
  top: 0;
  left: 0;
  width: 100%; /* Largura total */
  height: 100%; /* Altura total */
  background-color: #FF7043; /* Cor de fundo */
  opacity: 0; /* Inicialmente invisível */
  transition: opacity 0.3s ease; /* Transição suave de opacidade */
  border-radius: 5px; /* Borda arredondada */
`;

export const ListItemText = styled.span`
  position: relative; /* Garante que o texto fique acima do pseudo-elemento */
  z-index: 1; /* Garante que o texto esteja na frente do pseudo-elemento */
`;

export const ListItemHoverEffect = styled.div`
  position: absolute; /* Posição absoluta em relação ao item da lista */
  top: 50%; /* Alinha ao centro verticalmente */
  left: 50%; /* Alinha ao centro horizontalmente */
  transform: translate(-50%, -50%); /* Centraliza o elemento */
  width: 80%; /* Largura */
  height: 80%; /* Altura */
  background-color: rgba(255, 255, 255, 0.1); /* Cor de fundo com transparência */
  border-radius: 50%; /* Forma circular */
  opacity: 0; /* Inicialmente invisível */
  transition: opacity 0.3s ease; /* Transição suave de opacidade */
`;

export const ListItemIcon = styled.div`
  position: absolute; /* Posição absoluta em relação ao item da lista */
  top: 50%; /* Alinha ao centro verticalmente */
  left: 10px; /* Alinha ao lado esquerdo */
  transform: translateY(-50%); /* Centraliza verticalmente */
  width: 20px; /* Largura */
  height: 20px; /* Altura */
  background-color: #FF7043; /* Cor de fundo */
  border-radius: 50%; /* Forma circular */
  opacity: 0; /* Inicialmente invisível */
  transition: opacity 0.3s ease; /* Transição suave de opacidade */
`;

export const ListItemContent = styled.div`
  position: relative; /* Posição relativa para filhos absolutos */
  padding-left: 40px; /* Espaçamento à esquerda para o ícone */
`;
