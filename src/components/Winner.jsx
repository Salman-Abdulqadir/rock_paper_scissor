import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Navigate, useNavigate } from "react-router-dom";
import { StyledSelection } from "./Selection";

const Winner = () => {
  const navigate = useNavigate();
  const { selection, computerSelection, winner } = useSelector(
    (state) => state.game
  );
  if (!selection || !computerSelection) return <Navigate to={"/"} />;
  return (
    <StyledWinner className="flex">
      <div className="flex-col">
        <h2>You picked</h2>
        <StyledSelection
          className={`selection ${winner === "You Win" ? "winner" : ""}`}
        >
          <div className={`wrapper ${selection.selection}`}>
            <img src={selection.icon} alt={selection.selection} />
          </div>
        </StyledSelection>
      </div>
      <div className="result">
        <h1>{winner}</h1>
        <button onClick={() => navigate("/")} className="rules-btn">
          Play Again
        </button>
      </div>
      <div className="flex-col">
        <h2>The House picked</h2>
        <StyledSelection
          className={` selection ${
            winner === "The House Wins" ? "winner" : ""
          }`}
        >
          <div className={`wrapper ${computerSelection.selection}`}>
            <img
              src={computerSelection.icon}
              alt={computerSelection.selection}
            />
          </div>
        </StyledSelection>
      </div>
    </StyledWinner>
  );
};

const StyledWinner = styled.section`
  width: 100%;
  align-items: center;
  padding: 0 20%;
  .flex-col {
    align-items: center;
    h2{
        font-size: 2rem;
        color: white;
    }
  }
  .rules-btn {
    padding: 0.5rem 3rem;
    background-color: white;
    color: hsl(229, 25%, 31%);
  }
  h1 {
    font-size: 3rem;
    color: white;
  }

  .selection .wrapper {
    padding: 3rem;
    border-width: 2rem;
    opacity: 0.3;
  }
  .winner .wrapper{
   opacity: 1;
  }
  .result{
    text-align: center;
  }
 
`;
export default Winner;
