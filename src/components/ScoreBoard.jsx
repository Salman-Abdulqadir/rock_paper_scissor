import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import { useSelector } from "react-redux";

const ScoreBoard = () => {
    const score = useSelector(state => state.game.score)
  return (
    <StyledBoard className="flex">
      <img src={logo} alt="logo" />
      <div className="score">
        <p>Score</p>
        <h2>{score}</h2>
      </div>
    </StyledBoard>
  );
};

const StyledBoard = styled.header`
  min-width: 40%;
  margin-top: 2rem; 
  align-items: center;
  border: 1px solid white;
  padding: 1rem;
  border-radius: 10px;
  .score {
    background-color: white;
    text-align: center;
    padding: 0.5rem 2rem;
    border-radius: 10px;
    h2 {
      font-size: 3rem;
    }
  }
`;

export default ScoreBoard;
