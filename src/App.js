import React, { useState, useRef, useEffect } from "react";
import drumState from "./utilities/drumState";
import styled from "styled-components";

function App() {
  const [state] = useState(drumState());
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlay = (id) => {
    setPlaying(true);
    document.getElementById(id).play();
    setTimeout(() => setPlaying(false), 200);
  };

  return (
    <>
      <DrumMachine>
        <Header>yellow spoon machine</Header>
        {state.map((drum) => {
          console.log(drum.key);
          return (
            <PadContainer>
              <Pad
                playing={playing}
                key={drum.keyCode}
                letter={drum.key}
                onClick={(e) => handlePlay(drum.keyCode)}
              >
                {drum.key}
                <audio src={drum.audio} id={drum.keyCode}></audio>
              </Pad>
            </PadContainer>
          );
        })}
      </DrumMachine>
    </>
  );
}

const DrumMachine = styled.div`
  display: flex;
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
  padding: 5rem;
`;

const Pad = styled.div`
  width: 5rem;
  height: 5rem;
  border: 1px solid #000;
  border-radius: 10px;
  margin: 1rem;
  background-color: #f9d404;
`;

export default App;
