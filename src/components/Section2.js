// Componente Section2.js
import React from 'react';
import { Section2Container, Title, List, Card, ListItem, Icon, iconsMap } from '../styles/components/Section2Styles';

const Section2 = () => {
  return (
    <Section2Container>
      <Title>VAMOS PROPORCIONAR</Title>
      <List>
        {Object.keys(iconsMap).map((item, index) => (
          <Card key={index}>
            <Icon>{React.createElement(iconsMap[item])}</Icon>
            <ListItem>{item}</ListItem>
          </Card>
        ))}
      </List>
    </Section2Container>
  );
}

export default Section2;
