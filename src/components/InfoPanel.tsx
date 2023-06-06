import * as React from "react";
import styled from "@emotion/styled";

import { GameContext } from '../App';

import CoinIcon from "../assets/coin.png";

const InfoContainer = styled.div`
    display:flex;
    text-align:center;
    align-items:center;
    justify-content:center;
    margin-bottom:20px;
`;

const Icon = styled.img`
    height:25px;
`;

const InfoPanel: React.FC = () => {
    const {coins} = React.useContext(GameContext);

    return (
        <InfoContainer>
            <Icon src={CoinIcon} alt="Coins" /> {coins}
        </InfoContainer>
    )
}

export default InfoPanel;