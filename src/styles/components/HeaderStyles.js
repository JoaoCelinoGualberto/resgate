// styles/components/HeaderStyles.js
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #333;
  color: #fff;
  padding: 20px;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftContent = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 50px;
  margin-right: 10px;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin: 0;
`;

export const SocialLinks = styled.div`
  display: flex;
`;

export const Link = styled.a`
  color: #fff;
  text-decoration: none;
  margin-right: 10px;
`;

export const Button = styled.button`
  background-color: #fff;
  color: #333;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
`;
