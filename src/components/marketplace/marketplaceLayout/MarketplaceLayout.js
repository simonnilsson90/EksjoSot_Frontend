import Sidebar from "../dataSetsCards/sidebar/Sidebar"
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from "../dataSetsCards/theme/Theme";
import { Outlet } from 'react-router-dom';



export default function MarketplaceLayout() {

  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />

    <div style={{ display: 'flex', flexDirection: 'row', minWidth: '100vw', color: "black", backgroundColor: theme.palette.background.paper, }}>
     <Sidebar style={{ flex: 1, maxWidth: '15%' }} />
    <div style={{ flex: 2, minWidth: '80%', marginLeft: 10, minHeight: '100vh' }}>
    <Outlet />
    </div>
     </div>
    </ThemeProvider>
  )
}