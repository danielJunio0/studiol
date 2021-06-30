import styled from 'styled-components';

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