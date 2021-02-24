import React, { useState, useRef, useEffect } from "react";
import drumState from "./utilities/drumState";
import styled from "styled-components";

// Components
import Pad from "./components/Pad";

function App() {
  const [state] = useState(drumState());

  return (
    <>
      <DrumMachine>
        <Header>yellow spoon machine</Header>
        {state.map((drum) => (
          <PadContainer>
            <Pad drum={drum} />
          </PadContainer>
        ))}
      </DrumMachine>
    </>
  );
}

const DrumMachine = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #0040f2;
  width: 100%;
  height: 22rem;
`;

const Header = styled.h1`
  font-size: 3rem;
  color: #000;
  text-transform: uppercase;
`;

const PadContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2rem;
`;

export default App;
