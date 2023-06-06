import styled from "@emotion/styled";

import { Link, LinkProps, useLocation } from "react-router-dom";

interface INavButton {
    title: string;
    icon: React.ReactNode;
    to: string;
}

interface INavLink extends LinkProps {
    active: boolean;  
}

const NavLink = styled(Link)<INavLink>`
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
    padding:20px 30px;
    position:relative;

    & > * {
        font-size:20px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    &:hover {
        background: #1a1a2b;
        outline: 3px solid #2a2a3b;
        box-shadow: 0 0 20px rgba(0,0,0,0.3);
    }
`

const NavButton: React.FC<INavButton> = (props: INavButton) => {
    const location = useLocation();
    let active = false;

    if (location.pathname == props.to) {
        active = true;
    }

    return (
        <li>
            <NavLink to={props.to} active={active}>
                {props.icon}
            </NavLink>
        </li>
    )
}

export default NavButton;