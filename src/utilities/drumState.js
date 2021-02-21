import React from "react";
import clap from "../assets/clap.wav";
import kick from "../assets/kick.wav";
import highHat from "../assets/highHat.wav";
import ride from "../assets/ride.wav";
import tom1 from "../assets/tom1.wav";
import tom2 from "../assets/tom2.wav";

const drumState = () => {
  return [
    {
      audio: clap,
      key: "W",
      keyCode: 87,
    },
    {
      audio: highHat,
      key: "A",
      keyCode: 65,
    },
    {
      audio: kick,
      key: "S",
      keyCode: 83,
    },
    {
      audio: tom1,
      key: "D",
      keyCode: 68,
    },
    {
      audio: tom2,
      key: "Q",
      keyCode: 81,
    },
    {
      audio: ride,
      key: "E",
      keyCode: 69,
    },
  ];
};

export default drumState;
