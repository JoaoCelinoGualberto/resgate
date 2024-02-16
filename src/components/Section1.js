import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Section1Container, ContentContainer, Content, Image, Title, Paragraph } from '../styles/components/Section1Styles';
import sampleImage from '../assets/sample-image-sec1.jpg'; 
import sampleImage2 from '../assets/abraco.jpeg'; 
import sampleImage3 from '../assets/espiritualidade.jpeg'; 

const CarouselSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Remova as setas de navegação
    swipeToSlide: true, // Permite deslizar para navegar entre os slides
    autoplay: true, // Ativa o autoplay
    autoplaySpeed: 3000, // Define o intervalo entre cada transição em milissegundos (3 segundos)
  };

  return (
    <Section1Container>
      <Content>
        <Title>Conheça o Projeto Resgate</Title>
        <Paragraph>
          Junte-se a nós para construir um refúgio para aqueles que precisam! Vamos mudar vidas, transformar histórias e restaurar famílias com fé, foco e determinação. O seu apoio fará a diferença na vida de dependentes químicos e mulheres em situação de vulnerabilidade, através da nossa vida Deus vai resgatar milhões de outras vidas.
        </Paragraph>
      </Content>
      <Slider {...settings}>
        <ImageSlide src={sampleImage} alt="Sample Image" />
        <ImageSlide src={sampleImage2} alt="Sample Image 2" />
        <ImageSlide src={sampleImage3} alt="Sample Image 3" />
      </Slider>
    </Section1Container>
  );
}

export default CarouselSection;

const ImageSlide = ({ src, alt }) => (
  <ContentContainer>
    <Image src={src} alt={alt} />
  </ContentContainer>
);
