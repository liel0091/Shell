import React from 'react';
import { Wrapper, Title, Desc } from './content.styled';

interface ContentProp {
    title: string;
    desc?: string;
}

export const Content = ({ title, desc }: ContentProp) => {
    return (
        <Wrapper>
            <Title>{title}</Title>
            <Desc>{desc}</Desc>
        </Wrapper>
    );
};
