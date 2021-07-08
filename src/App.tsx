import { createContext, useState, useEffect } from 'react';
import { Login } from './pages/auth/Login';
import { Home } from './pages/Home/index'
import { Cadastro } from './pages/auth/Cadastro';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import { BrowserRouter, Route } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';
function App() {

  const theme = createMuiTheme({
    palette: {
    }
  });


  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <Route path="/" exact component={Login} />
          <Route path="/Login" exact component={Login} />
          <Route path="/Home" exact component={Home} />

          <Route path="/Cadastro" exact component={Cadastro} />
        </AuthContextProvider>
      </ThemeProvider>
    </BrowserRouter>

  );
}

export default App;
