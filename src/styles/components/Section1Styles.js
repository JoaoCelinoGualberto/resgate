import styled from "styled-components";

export const Section1Container = styled.section`
  background: linear-gradient(to bottom, #ffffff, #ffccbc);
  padding: 40px;
  text-align: center;
  padding: 1% 10%; 
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Content = styled.div`
  width: 50%;
  text-align: left;
`;

export const Image = styled.img`
  width: 50%;
  height: auto;
  margin-left: 4%;
  border-radius: 15px 50px 15px 50px; 
`;


export const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
  font-weight: 500;
`;

export const Paragraph = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  margin-right: 6%;
  text-align: justify;
`;

export const Button = styled.button`
  background-color: #4CAF50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 20px;
  display: flex;
  align-items: center; 
`;