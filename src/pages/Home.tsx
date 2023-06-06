import * as React from "react";
import styled from "@emotion/styled";

import { GameContext } from '../App';
import Ripple from "../components/Ripple";

const BigButton = styled.button`
    width:100%;
    height:25%;
    border-radius:20px;
    background:#2a2a3b;
    color:white;
    border:none;
    position: relative;
    overflow: hidden;
    user-select:none;
`

const Home: React.FC = () => {
    const {coins, setCoins} = React.useContext(GameContext);

    return (
        <>
            <BigButton onClick={() => { setCoins(coins + 1); }}>
                Click to earn coins.
                <Ripple color={"#7a7a8b50"} duration={2000} />
            </BigButton>
            <h2></h2>
        </>
    )
}

export default Home;