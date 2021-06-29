import React from 'react';
import googleIconImg from '../../../assets/images/google-icon.svg';

import { BackGroundGradient } from '../../../Components/index';

import { Button } from '@material-ui/core';

import TextField from '@material-ui/core/TextField';

export function Login() {

    return (
        <BackGroundGradient>
            <div style={{alignItems:'center'}}>
                
            <TextField label="E-mail" variant="outlined" color="primary"/>
            <TextField label="Senha" variant="outlined" />
            <Button>teste</Button>
            </div>
        </BackGroundGradient>
        
    );

}