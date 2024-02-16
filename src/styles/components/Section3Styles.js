import styled from 'styled-components';

export const Section3Container = styled.section`
  background: linear-gradient(to bottom, #ffffff, #ffccbc);
  padding: 3% 10%;
`;

export const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
  font-weight: 500;
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
  margin-bottom: 20px;
  width: calc(50% - 10px);
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  transition: transform 0.3s ease; /* Adicionando uma transição suave para o efeito de escala */

  @media screen and (max-width: 768px) {
    width: 100%; /* Altera para ocupar toda a largura em dispositivos menores */
  }

  &:hover {
    transform: scale(1.05); /* Aumenta o tamanho do item em 5% quando passa o mouse sobre ele */
  }
`;

export const Icon = styled.i`
  font-size: 24px;
  margin-right: 10px;
  color: #FF7043; /* Cor laranja para os ícones */
`;

export const ListItemText = styled.span`
  margin-left: 10px; /* Adiciona um espaço entre o ícone e o texto */
`;
