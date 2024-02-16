// styles/components/Section2Styles.js
import styled from 'styled-components';
import { FaRegUser, FaRegHeart, FaRegSmile, FaRegStar } from 'react-icons/fa'; 
import { GiBrain } from "react-icons/gi";

export const Section2Container = styled.section`
  background-color: #fff; 
  color: #000;
  padding: 3% 5%; /* Reduzindo o padding para telas menores */
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 23px; 
  margin-bottom: 20px; 
  font-weight: 500;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center; /* Centralizando os cards */
  flex-wrap: wrap; /* Permitindo que os cards quebrem para a próxima linha */
  gap: 20px; /* Espaçamento entre os cards */
`;

export const Card = styled.div`
  background-color: #fff;
  border: 3px solid #ffccbc; /* Adiciona a borda */
  width: 150px; /* Largura do círculo */
  height: 150px; /* Altura do círculo */
  border-radius: 50%; /* Transforma em um círculo */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1; /* Para ficar acima da linha */
`;

export const Icon = styled.div`
  font-size: 40px;
  margin-bottom: 10px;
  color: #ffccbc;
  &:hover {
    transform: scale(1.19); 
  }
`;

export const ListItem = styled.li`
  font-size: 0.76em; /* 1em é equivalente ao tamanho da fonte do elemento pai */
  color: #000;
  text-align: center; /* Alinha o texto ao centro horizontalmente */
  margin-top: 10px; /* Espaçamento acima do título */
  text-transform: uppercase; 
`;

// Mapeamento de ícones para cada item
export const iconsMap = {
  Identidade: FaRegUser,
  Dignidade: FaRegHeart,
  Autoestima: FaRegSmile,
  Esperança: FaRegStar,
  'Desenvolvimento pessoal': GiBrain,
};
