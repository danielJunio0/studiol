import { Login } from './pages/auth/Login';
import { Home } from './pages/Home/index'
import { Cadastro } from './pages/auth/Cadastro';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import { BrowserRouter, Route } from 'react-router-dom';
function App() {

  const theme = createMuiTheme({
    palette: {
      primary:{
        main:'#ffe4c4',
        dark:'#5b2677',
        
      },
      info:{
        main:'#bb9737'
      },
      secondary: {
        main: '#bb9737',
      },
    }
  });


  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Route path="/" exact component={Login}/>
        <Route path="/Login" exact component={Login}/>
        <Route path="/Home" exact component={Home}/>
        
        <Route path="/Cadastro" exact component={Cadastro}/>
      </ThemeProvider>
    </BrowserRouter>

  );
}

export default App;
