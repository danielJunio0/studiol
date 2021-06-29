import React from 'react';
import googleIconImg from '../../../assets/images/google-icon.svg';
import LogoImg from '../../../assets/images/logosalao1.png';

import { BackGroundGradient } from '../../../Components/index';

import { Button } from '@material-ui/core';

import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import {Separator} from './styles';

export function Login() {

    return (
        <BackGroundGradient>
            <div style={{
                justifyContent: 'center',
                display: 'flex',
                alignItems: 'center',
                height: '100vh'
            }}>
                <Card style={{ width: '345px' }}>
                    <CardContent>
                        <div style={{
                            display:'flex',
                            flexDirection:'column',
                            width:'100%',
                            textAlign:'center',
                            alignItems:'stretch'
                        }}>
                            <img src={LogoImg} alt="logo" style={{alignSelf:'center'}} />
                            <Button style={{
                                marginTop:'30px',
                                height:'40px',
                                borderRadius:'8px',
                                fontWeight: 500,
                                background:'#ea4335',
                                color:'#FFF',
                                
                                display:'flex',
                                justifyContent:'center',
                                alignItems:'center',

                                cursor:'pointer',
                                margin:0,
                            }}>
                                <img src={googleIconImg} alt="Logo do Google" style={{
                                    marginRight:'8px',
                                }}/>
                                Entre com Google
                            </Button>
                            <Separator>
                                Ou entre em sua conta
                            </Separator>
                            <form style={{
                                display:'flex',
                                flexDirection:'column',
                            }}>
                                <TextField label="E-mail" variant="outlined" color="primary" style={{margin:'12px'}} />
                                <TextField label="Senha" variant="outlined" style={{margin:'12px'}} />
                                <Button type='submit'>Entrar</Button>
                            </form>
                        </div>
                    </CardContent>
                </Card>
            </div>

        </BackGroundGradient>

    );

}