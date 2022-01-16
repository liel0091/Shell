import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, Logo } from './nav-item.styled';

interface RouteProps {
    to: string;
    name: string;
}

interface RoutsProps {
    list: RouteProps[];
    img?: string;
}

export const NavItem = ({ list, img }: RoutsProps) => {
    return (
        <Wrapper>
            <Logo alt="Shell Logo" src={img} />
            {list.map((prop, i) => (
                <Link key={i} to={prop.to}>
                    {prop.name}
                </Link>
            ))}
        </Wrapper>
    );
};
