import React from "react";
import { BackGround } from "../../Components";
import { Avatar, Container } from "@material-ui/core";
import { colors } from "../../styles";
import LogoImg from '../../assets/images/logosalao1.png';
import { Typography } from "@material-ui/core";


export function Perfil() {

    return (
        <BackGround>
            <Container maxWidth="md" style={{ padding: '20px' }}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Avatar onBlur={() => { alert('teste2') }} onClick={() => { alert('teste') }} alt="Remy Sharp" src={LogoImg} />
                    <Typography>Daniel Junio Barbosa</Typography>
                </div>
                <div style={{ background: colors.black, borderTopLeftRadius:'10px', borderTopRightRadius:'10px' }}>
                    <div style={{height:'350px', minHeight:100}}>

                    </div>
                </div>
            </Container>

        </BackGround>
    );
}