import styled from 'styled-components';
import { colors } from '../../../styles';

import Card from '@material-ui/core/Card';
export const Separator = styled.div`
    
    font-size: 14px;
    color: ${colors.bisque};
    margin: 32px 0;
    display:flex;
    align-items:center;

    &::before{
        content:'';
        flex:1;
        height: 1px;
        background:${colors.bisque};
        margin-right:16px;
    }

    &::after{
        content:'';
        flex:1;
        height: 1px;
        background: ${colors.bisque};
        margin-left:16px;
    }
                                
`;

export const Container = styled.div`
    justify-content: center;
    display: flex;
    align-items: center;
    height: 100vh;
    color: ${colors.bisque};
`;

export const CardContainer = styled(Card)`
    width: 345px;
    background:#252323;
    border: 3px solid ${colors.bisque};
    border-radius:15px;
    box-shadow:0px 0px 25px ${colors.yellow}, 0px 0px 15px ${colors.yellow} inset;

`;