import styled from 'styled-components';
import { fadeIn } from './utils';

export const Image = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5em;
    animation: ${fadeIn} 500ms ease-in;
`;
