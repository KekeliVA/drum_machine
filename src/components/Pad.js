import React, { useEffect } from "react";
import styled from "styled-components";

const Pad = ({ drum }) => {
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const handlePlay = () => {
    const sample = document.getElementById(drum.keyCode);
    sample.play();
  };

  const handleKeyPress = (e) => {
    e.keyCode === drum.keyCode && handlePlay();
  };

  return (
    <>
      <StyledPad onClick={() => handlePlay()}>{drum.key}</StyledPad>
      <audio src={drum.audio} id={drum.keyCode}></audio>
    </>
  );
};

const StyledPad = styled.div`
  width: 5rem;
  height: 5rem;
  border: 1px solid #000;
  border-radius: 10px;
  margin: 1rem;
  background-color: #f9d404;
`;

export default Pad;
