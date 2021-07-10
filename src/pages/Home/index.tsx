import { AppBar, Button, IconButton, Toolbar, Typography, Avatar, Menu, MenuItem, CardMedia } from '@material-ui/core';
import React, { useState } from 'react';
import { ContainerApp, ContainerQuadradoMobile, ContainerQuadradoWeb, ContainerRetanguloMobile, ContainerRetanguloWeb } from './styles';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ForwardSharpIcon from '@material-ui/icons/ForwardSharp';
import { useHistory } from 'react-router-dom';
import { colors } from '../../styles';
import LogoImg from '../../assets/images/logosalao1.png';
import BannerDourado from '../../assets/images/bannerdourado.jpg';
import teste from '../../assets/images/iluminacao2.jpg';
import teste2 from '../../assets/images/p2.jpg';
import ProfileImg from '../../assets/images/perfil.jpg';
import { useAuth } from '../../hooks/useAuth';
import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import Container from '@material-ui/core/Container';
import { BackGround } from '../../Components';
import { useEffect } from 'react';

export function Home() {

    const { user, LogarComGoogle } = useAuth();
    const history = useHistory();

    const [logado, setLogado] = useState(true);

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    function handleLoginScreen() {
        history.push('/Login');
    }
    function handleCadastroScreen() {
        history.push('/Cadastro');
    }

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogout = () => {
        history.push('/');
    };
    const handleProfile = () => {
        history.push('Perfil');
    };


    const [wid] = useState(window.innerWidth);
    return (
        <BackGround>
            <AppBar style={{ position: 'sticky' }} >
                <Toolbar style={{ background: colors.black }}>
                    <IconButton edge="start" aria-label="menu">
                        <Avatar onBlur={() => { alert('teste2') }} onClick={() => { alert('teste') }} alt="Remy Sharp" src={LogoImg} />
                    </IconButton>
                    <div style={{ flexGrow: 1 }} />
                    {logado ?
                        // <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: 'center' }}>
                        //     <Typography style={{ color: colors.bisque, marginRight: '10px' }}>{user?.name}</Typography>
                        //     <Avatar onBlur={() => { alert('teste2') }} onClick={() => { alert('teste') }} alt="Remy Sharp" src={ProfileImg} />
                        // </div>
                        <div>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <Avatar alt="Remy Sharp" src={ProfileImg} />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleProfile}>{<PersonOutlineRoundedIcon />}Perfil</MenuItem>
                                <MenuItem onClick={handleClose}>My account</MenuItem>
                                <MenuItem onClick={handleLogout}>{<ExitToAppRoundedIcon />}Sair</MenuItem>
                            </Menu>
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
            <CardMedia

                component="img"
                alt="Contemplative Reptile"
                height="100%"
                image={BannerDourado}
                title="Contemplative Reptile"
            />
            <Container maxWidth="sm" style={{ padding: '20px' }}>
                <div >
                    <p style={{ color: colors.bisque }}> </p>
                </div>
                {
                    wid > 700 ?
                        <>
                            <div style={{ padding: '20px', background: colors.black, borderRadius: '5px', marginBottom: '20px' }}>
                                <div>
                                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingBottom: '15px' }}>
                                        <Avatar style={{ marginRight: '15px' }} alt="Remy Sharp" src={ProfileImg} />
                                        <Typography>Studio L</Typography>
                                    </div>

                                    <ContainerRetanguloWeb>

                                        <CardMedia
                                            style={{ borderRadius: '5px' }}
                                            component="img"
                                            alt="Contemplative Reptile"
                                            height="100%"
                                            image={teste}
                                            title="Contemplative Reptile"
                                        />
                                    </ContainerRetanguloWeb>
                                    <IconButton
                                        edge='start'
                                        aria-label='menu'
                                        style={{color: colors.bisque, top:'-60px', right:'-10px'}}
                                    >
                                        <FavoriteBorderIcon />
                                    </IconButton>
                                </div>
                            </div>
                            <div style={{ padding: '20px', background: colors.black, borderRadius: '5px' }}>
                                <div>
                                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingBottom: '15px' }}>
                                        <Avatar style={{ marginRight: '15px' }} alt="Remy Sharp" src={ProfileImg} />
                                        <Typography>Studio L</Typography>
                                    </div>
                                    <ContainerRetanguloWeb>

                                        <CardMedia
                                            style={{ borderRadius: '5px' }}
                                            component="img"
                                            alt="Contemplative Reptile"
                                            height="100%"
                                            image={teste2}
                                            title="Contemplative Reptile"
                                        />
                                    </ContainerRetanguloWeb>
                                </div>
                            </div>
                        </>

                        :
                        <>
                            <div style={{ padding: '20px', background: colors.black, borderRadius: '5px', marginBottom: '20px' }}>
                                <div>
                                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingBottom: '15px' }}>
                                        <Avatar style={{ marginRight: '15px' }} alt="Remy Sharp" src={ProfileImg} />
                                        <Typography>Studio L</Typography>
                                    </div>

                                    <ContainerRetanguloMobile>

                                        <CardMedia
                                            style={{ borderRadius: '5px' }}
                                            component="img"
                                            alt="Contemplative Reptile"
                                            height="100%"
                                            image={teste}
                                            title="Contemplative Reptile"
                                        />
                                    </ContainerRetanguloMobile>
                                    <IconButton
                                        edge='start'
                                        aria-label='menu'
                                        style={{color: colors.bisque, top:'-60px', right:'-10px'}}
                                        onClick={()=>{}}
                                    >
                                        <FavoriteBorderIcon />
                                    </IconButton>
                                </div>
                            </div>
                            <div style={{ padding: '20px', background: colors.black, borderRadius: '5px' }}>
                                <div>
                                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingBottom: '15px' }}>
                                        <Avatar style={{ marginRight: '15px' }} alt="Remy Sharp" src={ProfileImg} />
                                        <Typography>Studio L</Typography>
                                    </div>
                                    <ContainerRetanguloMobile>

                                        <CardMedia
                                            style={{ borderRadius: '5px' }}
                                            component="img"
                                            alt="Contemplative Reptile"
                                            height="100%"
                                            image={teste2}
                                            title="Contemplative Reptile"
                                        />
                                    </ContainerRetanguloMobile>
                                </div>
                            </div>
                        </>
                }

            </Container>


        </BackGround>
    );
}