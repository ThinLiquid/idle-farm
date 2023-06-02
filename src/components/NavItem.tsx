import styled from "@emotion/styled";

import { Link, useLocation } from "react-router-dom";

interface NavItemProps {
    title: string;
    icon: React.ReactNode;
    to: string;
}

const NavButton = styled.button<{ active: boolean; }>`
    background: ${props => props.active ? "#1a1a2b" : "transparent"};
    border: none;
    color: white;
    height:20px;
    aspect-ratio: 1 / 1;
    padding: 10px;
    border-radius: 20px;
    height: 60px;
    transition: .2s box-shadow, .2s background, .2s outline;
    outline: ${props => props.active ? "3px" : "10px"} solid transparent;
    box-shadow: 0 0 27px transparent;

    & > * {
        font-size:20px;
    }

    &:hover {
        background: #1a1a2b;
        outline: 3px solid #2a2a3b;
        box-shadow: 0 0 20px rgba(0,0,0,0.3);
    }
`

const NavItem: React.FC<NavItemProps> = (props: NavItemProps) => {
    const location = useLocation();
    let active = false;

    if (location.pathname == props.to) {
        active = true;
    }

    return (
        <li>
            <Link to={props.to}>
                <NavButton active={active}>
                    {props.icon}
                </NavButton>
            </Link>
        </li>
    )
}

export default NavItem;