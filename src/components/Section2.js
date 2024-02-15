import React from 'react';
import { Section2Container, Title, List, ListItem } from '../styles/components/Section2Styles';

const Section2 = () => {
  return (
    <Section2Container>
      <Title>Vamos proporcionar:</Title>
      <List>
        <ListItem>Identidade</ListItem>
        <ListItem>Dignidade</ListItem>
        <ListItem>Autoestima</ListItem>
        <ListItem>Esperança</ListItem>
        <ListItem>Desenvolvimento pessoal</ListItem>
      </List>
    </Section2Container>
  );
}

export default Section2;
