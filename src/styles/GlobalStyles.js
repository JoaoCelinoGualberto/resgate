// styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Reset de margem e padding para todos os elementos */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; /* Adicione esta linha para garantir que a largura e altura incluam preenchimento e borda */
  }

  /* Estilo global para todos os elementos */
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif; /* Certifique-se de importar a fonte Roboto se quiser usá-la */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

`;

export default GlobalStyles;
