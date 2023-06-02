import * as React from 'react';

import "./styles.scss";

import styled from "@emotion/styled";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from './components/Nav';
import NavList from './components/NavList';
import NavItem from './components/NavItem';
import NavDivider from './components/NavDivider';

import { MdHome, MdShoppingBag, MdEmojiEvents, MdSettings } from "react-icons/md";

const Container = styled.div`
    background: #1a1a2b;
    margin:20px;
    border-radius:20px;
    height: calc(100vh - 80px);
    width:100%;
    padding:20px;
    box-shadow: 0 0 20px rgba(0,0,0,0.3);
`;

function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Home View</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
}

const App: React.FC = () => {
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
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Home />} />
            <Route path="/stats" element={<Home />} />
            <Route path="/settings" element={<Home />} />
          </Routes>
      </Container>
      </Router>
    </main>
  )
}

export default App;
