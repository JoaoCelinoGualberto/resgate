// components/Section3.js
import React from "react";
import {
  Section3Container,
  Title,
  Paragraph,
  List,
  ListItem,
} from "../styles/components/Section3Styles";

const Section3 = () => {
  return (
    <Section3Container>
      <Title>
        Desde 2023 estou trabalhando e juntando recursos para esta obra e quero
        convidar você pessoa enviada por Deus para apoiar o projeto Resgate. A
        sua contribuição será apoio na aquisição do terreno e a construção da
        casa, que oferecerá um ambiente que inclui:
      </Title>
      <Paragraph>
        <List>
          <ListItem>
           Auditório para palestras{" "}
          </ListItem>
          <ListItem>
            Refeitório com banheiro
          </ListItem>
          <ListItem>
             Dormitórios com banheiro
          </ListItem>
          <ListItem>
             Cozinha
          </ListItem>
          <ListItem>
            Espaço para Esporte/Lazer
          </ListItem>
          <ListItem>
          Piscina
          </ListItem>
          <ListItem>
            Escritório
          </ListItem>
          <ListItem>
            Horticultura
          </ListItem>
          <ListItem>
           Criação de aves
          </ListItem>
          <ListItem>
             Cozinha para cursos de panificação
          </ListItem>
          <ListItem>
           Sala para cursos profissionalizantes
          </ListItem>
        </List>
      </Paragraph>
    </Section3Container>
  );
};

export default Section3;
