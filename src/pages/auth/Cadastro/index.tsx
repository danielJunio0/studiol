import React,{ useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import googleIconImg from '../../../assets/images/google-icon.svg';
import LogoImg from '../../../assets/images/logosalao1.png';
import { BackGroundGradient } from '../../../Components/index';

import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Switch from '@material-ui/core/Switch';

import { Separator,CardContainer } from './styles';
import { Input } from '../../../Components/Input';
import { colors } from '../../../styles';

export function Cadastro() {

const[isChecked,setIsChecked] = useState(false);

const history = useHistory();

function navigateToHome(){
    history.push('/Home');
}

function Logar(){
    
}

    return (
        <BackGroundGradient>
            <div style={{
                justifyContent: 'center',
                display: 'flex',
                alignItems: 'center',
                height: '100vh',
                color:'#ffe4c4'
            }}>
                <CardContainer>
                    <CardContent>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                            textAlign: 'center',
                            alignItems: 'stretch'
                        }}>
                            <img src={LogoImg} alt="logo" style={{ alignSelf: 'center' }} />
                            <Button style={{
                                marginTop: '60px',
                                height: '40px',
                                borderRadius: '8px',
                                fontWeight: 500,
                                background: '#ea4335',
                                color: '#ffe4c4',

                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',

                                cursor: 'pointer',
                            }}>
                                <img src={googleIconImg} alt="Logo do Google" style={{
                                    marginRight: '8px',
                                }} />
                                Cadastrar com Google
                            </Button>
                            <Separator>
                                Ou cadastre sua conta
                            </Separator>
                            <form style={{
                                display: 'flex',
                                flexDirection: 'column',
                            }}>
                                
                                <Input  label="Nome" variant="outlined" style={{marginBottom:'12px'}}/>
                                <Input  label="E-mail" variant="outlined" style={{marginBottom:'12px'}}/>
                                <Input type="password"  label="Senha" variant="outlined"/>
                                <Input type="password"  label="Confirme a senha" variant="outlined" style={{marginBottom:'12px', marginTop:'12px'}}/>
                                <Button onClick={navigateToHome} type='submit' style={{ background: colors.gold, color: '#fff' }}>Cadastrar</Button>
                                <div style={{marginTop:'10px', color:colors.bisque}}>Já possui uma conta? <Link to="/Login" style={{color: colors.gold}}>Entrar</Link></div>
                            </form>
                        </div>
                    </CardContent>
                </CardContainer>
            </div>

        </BackGroundGradient>

    );

}