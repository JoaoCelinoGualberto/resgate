// components/Header.js
import React from 'react';
import { HeaderContainer, HeaderContent, Logo, Title, SocialLinks, Link, Button } from '../styles/components/HeaderStyles';
import logoImg from '../assets/logoResgate.png'
const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo src={logoImg} alt="Logo" />
        <Title>RESGATE</Title>
        <SocialLinks>
          <Link href="https://www.instagram.com/">Instagram</Link>
          <Link href="https://www.facebook.com/">Facebook</Link>
          <Link href="https://www.youtube.com/">Youtube</Link>
        </SocialLinks>
        <Button>Salve Vidas</Button>
      </HeaderContent>
    </HeaderContainer>
  );
}

export default Header;
