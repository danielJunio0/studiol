import styled from 'styled-components';
import { colors } from '../../styles';
export const Separator = styled.div`
    
    font-size: 14px;
    color: #a8a8b3;
    margin: 32px 0;
    display:flex;
    align-items:center;

    &::before{
        content:'';
        flex:1;
        height: 1px;
        background:#a8a8b3;
        margin-right:16px;
    }

    &::after{
        content:'';
        flex:1;
        height: 1px;
        background:#a8a8b3;
        margin-left:16px;
    }
                                
`;

export const ContainerApp = styled.div`
    background: ${colors.background};
    height: 100%;
`;

export const ContainerQuadradoMobile = styled.div`
    max-height: 375px;
    max-width: 375px;
    margin-bottom:'20px';
`;

export const ContainerQuadradoWeb = styled.div`
    max-height: 614px;
    max-width: 614px;
    margin-bottom:'20px';
`;

export const ContainerRetanguloMobile = styled.div`
    
    max-height: 468px;
    max-width: 375px;
    margin-bottom:'20px';
`;

export const ContainerRetanguloWeb = styled.div`
    
    max-height: 767px;
    max-width: 614px;
    margin-bottom: 20px;
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;