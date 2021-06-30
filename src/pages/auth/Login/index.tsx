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

import { Separator } from './styles';
import { Input } from '../../../Components/Input';
export function Login() {

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
                <Card style={{ width: '345px', background:'#252323' }}>
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
                                Entre com Google
                            </Button>
                            <Separator>
                                Ou entre em sua conta
                            </Separator>
                            <form style={{
                                display: 'flex',
                                flexDirection: 'column',
                            }}>
                                <TextField label="E-mail" variant="outlined" color="primary" style={{color:'#ffe4c4'}} required />
                                <TextField label="Senha" variant="outlined" style={{ marginTop: '12px', marginBottom: '12px' }} />
                                <Input variant="outlined"/>
                                <div style={{display:'flex', justifyContent:'space-between', flexDirection:'row', alignItems:'center', color:'#ffe4c4'}}>
                                    <p>Lembrar de mim</p>
                                    <Switch color='primary' checked={isChecked} onChange={() => { setIsChecked(!isChecked) }} />
                                </div>

                                <Button onClick={navigateToHome} type='submit' style={{ background: '#bb9737', color: '#111' }}>Entrar</Button>
                                <div style={{marginTop:'10px', color:'#ffe4c4'}}>NÃO TEM UMA CONTA? <Link to="/Cadastro">Inscreva-se</Link></div>
                            </form>
                        </div>
                    </CardContent>
                </Card>
            </div>

        </BackGroundGradient>

    );

}