import React, { ReactNode } from 'react';
import { Container } from './styles';

interface Props {
    children?: ReactNode;
}

export const BackGround = ({ children }: Props) => {

    return (
        <Container>
            {children}
        </Container>
    )
}