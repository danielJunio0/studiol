import { AppBar, Button, IconButton, Toolbar, Typography, Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import { Container } from './styles';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ForwardSharpIcon from '@material-ui/icons/ForwardSharp';
import { useHistory } from 'react-router-dom';
import { colors } from '../../styles';
import LogoImg from '../../assets/images/logosalao1.png';
import ProfileImg from '../../assets/images/perfil.jpg';
import { useAuth } from '../../hooks/useAuth';

export function Home() {

    const { user, LogarComGoogle } = useAuth();
    const history = useHistory();

    const [logado, setLogado] = useState(true);

    function handleLoginScreen() {
        history.push('/Login');
    }
    function handleCadastroScreen() {
        history.push('/Cadastro');
    }
    return (
        <Container>
            <div>
                <AppBar>
                    <Toolbar style={{ background: colors.black }}>
                        <IconButton edge="start" aria-label="menu">
                            <Avatar onBlur={() => { alert('teste2') }} onClick={() => { alert('teste') }} alt="Remy Sharp" src={LogoImg} />
                        </IconButton>
                        <div style={{ flexGrow: 1 }} />
                        {logado ?
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: 'center' }}>
                                <Typography style={{ color: colors.bisque, marginRight: '10px' }}>{user?.name}</Typography>
                                <Avatar onBlur={() => { alert('teste2') }} onClick={() => { alert('teste') }} alt="Remy Sharp" src={ProfileImg} />
                            </div>
                            :
                            <>
                                <Button
                                    style={{ marginRight: '5px', color: colors.yellow, borderColor: colors.yellow }}
                                    startIcon={<ForwardSharpIcon />}
                                    variant="outlined"
                                    onClick={handleCadastroScreen}>
                                    Cadastre-se
                                </Button>
                                <Button
                                    style={{ marginRight: '5px', color: colors.yellow, borderColor: colors.yellow }}
                                    color="secondary"
                                    startIcon={<AccountCircle />}
                                    variant="outlined"
                                    onClick={handleLoginScreen}
                                >
                                    Fazer Login
                                </Button>
                            </>
                        }
                    </Toolbar>
                </AppBar>
            </div>

            <Container >
                <p style={{ color: colors.bisque }}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias cumque voluptates deleniti labore? Nihil deserunt cumque voluptatum necessitatibus sunt quis minus recusandae ab corporis qui. Quod sapiente sunt enim. Reprehenderit?</p>
            </Container>
        </Container>
    );
}