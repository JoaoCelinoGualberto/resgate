import React, { useState } from "react";
import {
  Section6Container,
  Title,
  List,
  ListItem,
  Question,
  Answer,
  ArrowIcon,
} from "../styles/components/Section6Styles";
import { FaChevronDown } from "react-icons/fa";
import { CiCircleQuestion } from "react-icons/ci";

const Section6 = () => {
  const [expanded, setExpanded] = useState(null); // Estado para controlar qual pergunta está expandida

  const handleToggle = (index) => {
    if (expanded === index) {
      setExpanded(null); // Se a pergunta já estiver expandida, contraia
    } else {
      setExpanded(index); // Caso contrário, expanda
    }
  };

  return (
    <Section6Container>
      <Title>
      <CiCircleQuestion />
         Perguntas Frequentes</Title>
      <List>
        {faqData.map((item, index) => (
          <ListItem key={index}>
            <Question onClick={() => handleToggle(index)}>
              {item.question}
              <ArrowIcon expanded={expanded === index}>
                <FaChevronDown />
              </ArrowIcon>
            </Question>
            {expanded === index && <Answer>{item.answer}</Answer>}{" "}
            {/* Renderiza a resposta se o índice corresponder à pergunta expandida */}
          </ListItem>
        ))}
      </List>
    </Section6Container>
  );
};

export default Section6;
const faqData = [
  {
    question: "Por onde eu acompanho o desenvolvimento do projeto?",
    answer: "Você pode acompanhar o projeto pelo Instagram @X e Tiktok @X",
  },
  {
    question: "Como faço para ser voluntário no projeto?",
    answer: "Entre em contato pelo email X",
  },
  {
    question: "Como faço para fazer outros tipos de doações?",
    answer: "Entre em contato pelo email X",
  },
];
