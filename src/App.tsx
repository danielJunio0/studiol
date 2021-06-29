import { Login } from './pages/auth/Login';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';

function App() {

  const theme = createMuiTheme({
      palette:{
        primary:{
          main:'#6b0040'
        }
      }  
  });


  return (
    <ThemeProvider theme={theme}>
      <Login />
    </ThemeProvider>
  );
}

export default App;
