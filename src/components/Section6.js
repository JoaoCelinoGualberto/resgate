import React from 'react';
import { Section6Container, Title, List, ListItem, Question, Answer } from '../styles/components/Section6Styles';

const Section6 = () => {
  return (
    <Section6Container>
      <Title>Perguntas Frequentes</Title>
      <List>
        <ListItem>
          <Question>Por onde eu acompanho o desenvolvimento do projeto?</Question>
          <Answer>Você pode acompanhar o projeto pelo Instagram @X e Tiktok @X</Answer>
        </ListItem>

        <ListItem>
          <Question>Como faço para ser voluntário no projeto?</Question>
          <Answer>Entre em contato pelo email X</Answer>
        </ListItem>
        <ListItem>
          <Question>Como faço para fazer outros tipos de doações?</Question>
          <Answer>Entre em contato pelo email X</Answer>
        </ListItem>
      </List>
    </Section6Container>
  );
}

export default Section6;
