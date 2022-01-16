import styled from 'styled-components';
import { slideInTop } from '../../utils';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5rem;
    animation: ${slideInTop} 3s ease-in;
`;

export const Title = styled.h1`
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Desc = styled.p`
    text-align: center;
    font-size: 14px;
    line-height: 2;
`;
