// components/Section3.js
import React from 'react';
import { Section3Container, Title, Paragraph, List, ListItem } from '../styles/components/Section3Styles';

const Section3 = () => {
  return (
    <Section3Container>
      <Title>Desde 2023 estou trabalhando e juntando recursos para esta obra e quero convidar você pessoa enviada por Deus para apoiar o projeto Resgate. A sua contribuição será apoio na aquisição do terreno e a construção da casa, que oferecerá um ambiente que inclui:</Title>
      <Paragraph>
        Auditório para palestras;
        Refeitório com banheiro;
        Dormitórios com banheiro;
        Cozinha;
        Espaço para Esporte/Lazer;
        Piscina;
        Escritório;
        Horticultura;
        Criação de aves;
        Cozinha para cursos de panificação;
        Sala para cursos profissionalizantes.
      </Paragraph>
    </Section3Container>
  );
}

export default Section3;
