// components/Section3.js
import React from 'react';
import { Section3Container, Title, Paragraph, List, ListItem } from '../styles/components/Section3Styles';
import { FaUsers, FaUtensils, FaBed, FaFutbol, FaSwimmingPool, FaBriefcase, FaSeedling, FaDove, FaBreadSlice, FaChalkboardTeacher } from 'react-icons/fa'; // Importando os ícones da biblioteca react-icons

const Section3 = () => {
  return (
    <Section3Container>
      <Title>Desde 2023 estou trabalhando e juntando recursos para esta obra e quero convidar você pessoa enviada por Deus para apoiar o projeto Resgate. A sua contribuição será apoio na aquisição do terreno e a construção da casa, que oferecerá um ambiente que inclui:</Title>
      <Paragraph>
        <List>
          <ListItem>
            <FaUsers /> {' '} Auditório para palestras {/* Adicionando um espaço entre o ícone e o texto */}
          </ListItem>
          <ListItem>
            <FaUtensils /> {' '} Refeitório com banheiro
          </ListItem>
          <ListItem>
            <FaBed /> {' '} Dormitórios com banheiro
          </ListItem>
          <ListItem>
            <FaUtensils /> {' '} Cozinha
          </ListItem>
          <ListItem>
            <FaFutbol /> {' '} Espaço para Esporte/Lazer
          </ListItem>
          <ListItem>
            <FaSwimmingPool /> {' '} Piscina
          </ListItem>
          <ListItem>
            <FaBriefcase /> {' '} Escritório
          </ListItem>
          <ListItem>
            <FaSeedling /> {' '} Horticultura
          </ListItem>
          <ListItem>
            <FaDove /> {' '} Criação de aves
          </ListItem>
          <ListItem>
            <FaBreadSlice /> {' '} Cozinha para cursos de panificação
          </ListItem>
          <ListItem>
            <FaChalkboardTeacher /> {' '} Sala para cursos profissionalizantes
          </ListItem>
        </List>
      </Paragraph>
    </Section3Container>
  );
}

export default Section3;
