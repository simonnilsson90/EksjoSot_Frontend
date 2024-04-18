import Sidebar from './sidebar/Sidebar'
import Carousel from './carousel/Carousel'
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme/Theme';

function CardsLayoutWithSidebar({ chidren }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <div style={{ display: 'flex', flexDirection: 'row', width: '100%', color: "black", backgroundColor: theme.palette.background.paper, }}>
        <div style={{ flex: 1, minWidth: '25%' }}>
            <Sidebar />
        </div>
        <div style={{ flex: 2 ,minWidth: '75%' }}>
            <Carousel />
        </div>


    </div>
    </ThemeProvider>

  )
}

export default CardsLayoutWithSidebar
