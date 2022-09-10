import * as React from 'react';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import SideBar from './Sidebar';
import AppBar from './AppBar';
import Copyright from './Copyright';

const mdTheme = createTheme();

const DashboardBody = ({children}: {children: any}) => (
  <Box
    component="main"
    sx={{
      backgroundColor: (theme) =>
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[900],
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    }}>
    <Toolbar />
    <Container maxWidth="lg" sx={{mt: 4, mb: 4}}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
            {children}
          </Paper>
        </Grid>
      </Grid>
      <Copyright sx={{pt: 4}} />
    </Container>
  </Box>
);

const DashboardContent = ({children}: {children: any}) => {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{display: 'flex'}}>
        <CssBaseline />
        <AppBar open={open} toggleDrawer={toggleDrawer} />
        <SideBar open={open} toggleDrawer={toggleDrawer} />
        <DashboardBody>{children}</DashboardBody>
      </Box>
    </ThemeProvider>
  );
};

const Dashboard = ({children}: {children: any}) => (
  <DashboardContent>{children}</DashboardContent>
);

export default Dashboard;
