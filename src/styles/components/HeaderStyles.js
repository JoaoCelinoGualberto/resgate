import styled, { css } from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #fff;
  color: #FF7043;
  padding: 1% 5%; 
  max-width: 100vw; 
  margin: 0 auto; 
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const Logo = styled.img`
  width: auto;
  height: 60px; 
  margin-right: 20px; 
`;

export const Title = styled.h1`
  font-size: 24px; 
  margin: 0; 
  font-weight: normal;
`;

export const SocialLinks = styled.div`
  display: flex;
  margin-top: 10px; /* Adicionando espaço superior para os links sociais */
`;

export const Link = styled.a`
  color: #FF7043;
  text-decoration: none;
  margin-right: 15px; /* Espaçamento entre os links sociais */
`;

export const Button = styled.button`
  background-color: transparent; 
  color: #FF7043;
  padding: 8px 16px; /* Aumentando o espaço interno do botão para melhor legibilidade */
  border: 1px solid #FF7043;
  border-radius: 20px; 
  cursor: pointer;
  margin-top: 10px; /* Adicionando espaço superior para o botão */
`;

// Media query para telas menores que 768px (tamanhos de tablet e menor)
export const MediaQuery = css`
  @media screen and (max-width: 768px) {
    /* Ajustes específicos para telas menores */
    ${HeaderContent} {
      flex-direction: column; /* Empilhar os elementos verticalmente */
      align-items: flex-start; /* Alinhar os elementos à esquerda */
    }

    ${Title} {
      font-size: 20px; /* Reduzir ainda mais o tamanho do título */
      margin-top: 10px; /* Adicionar espaço superior para o título */
    }

    ${SocialLinks} {
      margin-top: 20px; /* Aumentar o espaço superior para os links sociais */
    }

    ${Link} {
      margin-right: 10px; /* Reduzir o espaçamento entre os links sociais */
    }

    ${Button} {
      margin-top: 20px; /* Aumentar o espaço superior para o botão */
    }
  }
`;
