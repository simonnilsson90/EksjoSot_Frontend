// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,      // extra-small screens
      sm: 600,    // small screens
      md: 900,    // medium screens
      lg: 1200,   // large screens
      xl: 1536,   // extra-large screens
    },
  },
  typography: {
    fontFamily: "Montserrat, Arial, Helvetica, sans-serif",
    fontSize: 16, // Assuming the base size is 16px for --font-size-base
    h1: { fontSize: '6rem' }, // --font-size-xxl
    h2: { fontSize: '4rem' }, // --font-sieze-xl
    h3: { fontSize: '2rem' }, // --font-size-l
    body1: { fontSize: '1rem' }, // --font-size-base
    body2: { fontSize: '0.8rem' }, // --font-size-s
    // You can continue this pattern for other typography variants
  },
  palette: {
    primary: { main: '#F28B30' }, // --c-orange
    background: {
      default: '#2F2A29', // --c-dark-bg
      paper: '#C8B6A1', // --c-light-bg
    },
    text: {
      primary: '#FFFFFF', // --c-light-text
      secondary: '#000000', // --c-dark-text
    },
  },
  spacing: factor => `${0.25 * factor}rem`, // A simple conversion, assuming 1 spacing unit is 4px
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
        
        :root {
          --padding-base: 16px;
          --padding-s: calc(var(--padding-base) * .5); 
          --padding-m: calc(var(--padding-base) * 1.5);
          --padding-l: calc(var(--padding-base) * 2);
          --padding-xl: calc(var(--padding-base) * 4);
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        
        body {
          display: flex;
          flex-direction: column;
          font-family: 'Montserrat', Arial, Helvetica, sans-serif;
          min-height: 100vh;
          background-color: var(--c-dark-bg); /* If you need to directly use CSS variables */
          color: var(--c-light-text); /* Apply for default text color */
        }
      `,
    },
  },
});

export default theme;
