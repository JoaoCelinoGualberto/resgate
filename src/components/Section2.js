// components/Section2.js
import React from 'react';
import { Section2Container, Title, List, ListItem, ListItemContent } from '../styles/components/Section2Styles';
import { FaRegSmile } from 'react-icons/fa'; // Importa o ícone da biblioteca React Icons

const Section2 = () => {
  return (
    <Section2Container>
      <Title>VAMOS PROPORCIONAR</Title>
      <List>
        <ListItem>
          <ListItemContent>
            Identidade
            <FaRegSmile /> {/* Ícone da biblioteca React Icons */}
          </ListItemContent>
        </ListItem>
        <ListItem>
          <ListItemContent>
            Dignidade
            <FaRegSmile /> {/* Ícone da biblioteca React Icons */}
          </ListItemContent>
        </ListItem>
        <ListItem>
          <ListItemContent>
            Autoestima
            <FaRegSmile /> {/* Ícone da biblioteca React Icons */}
          </ListItemContent>
        </ListItem>
        <ListItem>
          <ListItemContent>
            Esperança
            <FaRegSmile /> {/* Ícone da biblioteca React Icons */}
          </ListItemContent>
        </ListItem>
        <ListItem>
          <ListItemContent>
            Desenvolvimento pessoal
            <FaRegSmile /> {/* Ícone da biblioteca React Icons */}
          </ListItemContent>
        </ListItem>
      </List>
    </Section2Container>
  );
}

export default Section2;

