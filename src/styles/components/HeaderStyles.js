import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #fff;
  color: #FF7043;
  padding: 1% 3.2%; 
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  width: 3.6%;
  margin-right: -320px;
`;

export const Title = styled.h1`
  font-size: 1.7em;
  margin: 0; 
  font-weight: normal;
`;

export const SocialLinks = styled.div`
  display: flex;
  `;

export const Link = styled.a`
  color: #FF7043;
  text-decoration: none;
  margin-right: 15%; 
`;

export const Button = styled.button`
  background-color: transparent; /* Removemos o fundo */
  color: #FF7043;
  padding: 1% 2%; 
  border: 1px solid #FF7043; /* Adicionamos uma borda com cor */
  border-radius: 20px; /* Adicionamos bordas arredondadas */
  cursor: pointer;
`;

