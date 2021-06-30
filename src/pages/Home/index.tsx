import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { Container } from './styles';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ForwardSharpIcon from '@material-ui/icons/ForwardSharp';
import { useHistory } from 'react-router-dom';
export function Home() {

    const history = useHistory();

    function handleLoginScreen() {
        history.push('/Login');
    }

    return (
        <Container>
            <AppBar>
                <Toolbar>
                    <IconButton edge="start" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <div style={{ flexGrow: 1 }} />
                    <Button
                        color="secondary"
                        style={{ marginRight: '5px' }}
                        startIcon={<ForwardSharpIcon />}
                        variant="outlined">
                        Cadastre-se
                    </Button>
                    <Button
                        color="secondary"
                        startIcon={<AccountCircle />}
                        variant="outlined"
                        onClick={handleLoginScreen}
                    >
                        Fazer Login
                    </Button>
                </Toolbar>
            </AppBar>
        </Container>
    );
}