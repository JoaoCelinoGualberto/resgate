import styled from "styled-components";

export const Section6Container = styled.section`
  background-color: #008080;
  padding: 3% 18%;
  text-align: left;
  max-width: 100vw; /* Largura máxima da seção */
  margin: 0 auto; /* Centralizar na tela */
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #fff;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  font-size: 18px;
  margin-bottom: 20px;
  cursor: pointer;
  border: 1px solid #fff; /* Adiciona borda branca */
  border-radius: 5px;
`;

export const TextContainer = styled.div`
  width: 100%;
`;

export const Question = styled.div`
  display: flex;
  align-items: center; /* Adiciona alinhamento vertical */
  justify-content: space-between;
  padding: 10px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 0.01em; /* Adiciona espaçamento inferior entre as perguntas e respostas */
`;

export const Answer = styled.div`
  font-size: 15px;
  color: #fff;
  display: flex; /* Adiciona display flex para alinhamento vertical */
  align-items: center; /* Adiciona alinhamento vertical */
  margin-left: 1.2%;
  padding-bottom: 2%;
`;

export const ArrowIcon = styled.div`
  color: #fff;
  transform: ${({ expanded }) =>
    expanded ? "rotate(180deg)" : "rotate(0deg)"};
  transition: transform 0.3s ease;
`;
