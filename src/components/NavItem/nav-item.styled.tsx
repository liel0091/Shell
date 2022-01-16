import styled from 'styled-components';

export const Logo = styled.img`
    height: 25px;
    width: 25px;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    width: -webkit-fill-available;
    position: fixed;
    top: 0;
    margin: 0;
    padding: 1rem;
    background: rgba(102, 107, 113, 0.6);
    box-shadow: -1px 2px 6px rgb(0 0 0 / 20%);

    > a {
        color: rgb(240, 240, 240);
        font-size: 16px;
        font-weight: 400;
        padding: 0 2rem;
        text-decoration: none;

        &:hover {
            color: rgb(210, 210, 210);
        }

        &:active,
        :focus {
            color: rgb(255, 165, 0);
            outline: none;
        }
    }
`;
