import * as React from 'react';

import "./styles.scss";

import styled from "@emotion/styled";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from './components/Nav';
import NavList from './components/NavList';
import NavItem from './components/NavButton';

import { MdHome, MdShoppingBag, MdEmojiEvents, MdSettings } from "react-icons/md";

import Home from './pages/Home';
import InfoPanel from './components/InfoPanel';

const Container = styled.div`
    background: #1a1a2b;
    margin:20px;
    border-radius:20px;
    height: calc(100vh - 80px);
    width:100%;
    padding:20px;
    box-shadow: 0 0 20px rgba(0,0,0,0.3);
`;

interface IGameContext {
  coins: number;
  setCoins: React.Dispatch<React.SetStateAction<number>>;
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const GameContext = React.createContext<IGameContext>({ coins: 0, setCoins: () => {} });

const App: React.FC = () => {
  const [coins, setCoins] = React.useState(0);

  return (
    <main>
      <Router>
      <Nav>
        <NavList>
          <NavItem title="Home" icon={<MdHome />} to="/" />
          <NavItem title="Store" icon={<MdShoppingBag />} to="/store" />
          <NavItem title="Stats" icon={<MdEmojiEvents />} to="/stats" />
          <span style={{ flexGrow: 1 }}></span>
          <NavItem title="Settings" icon={<MdSettings />} to="/settings" />
        </NavList>
      </Nav>
      <Container>
          <GameContext.Provider value={{ coins, setCoins }}>
            <InfoPanel />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/store" element={<Home />} />
              <Route path="/stats" element={<Home />} />
              <Route path="/settings" element={<Home />} />
            </Routes>
          </GameContext.Provider>
      </Container>
      </Router>
    </main>
  )
}

export default App;
