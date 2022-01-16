import styled from 'styled-components';

export const Wrapper = styled.footer`
    display: flex;
    justify-content: center;
    background: rgba(165, 171, 188, 0.26);
    margin: 0;
    padding: 1rem;
`;

export const Grid = styled.div`
    display: grid;
    grid-gap: 5px;
    grid-template-columns: 68px 29px 59px;
`;

export const Section = styled.section`
    font-size: 10px;
    font-weight: 600;
    color: rgba(163, 164, 168, 1);
    text-transform: uppercase;

    &:after {
        content: '•';
        display: inline-block;
        margin-left: 6px;
    }
`;
