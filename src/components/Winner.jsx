import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Navigate, useNavigate } from "react-router-dom";
import { StyledSelection } from "./Selection";
import { fadeIn } from "../../animations";

const Winner = () => {
  const navigate = useNavigate();
  const { selection, computerSelection, winner } = useSelector(
    (state) => state.game
  );
  if (!selection || !computerSelection) return <Navigate to={"/"} />;
  return (
    <StyledWinner className="flex" variants={fadeIn} initial="initial" animate="animate">
      <div className="flex-col">
        <h3>YOU PICKED</h3>
        <StyledSelection
          className={`selection ${winner === "YOU WIN" ? "winner" : ""}`}
        >
          <div className="winner-div">
            <div>
              <div></div>
            </div>
          </div>
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
        <h3>THE HOUSE PICKED</h3>
        <StyledSelection
          className={` selection ${winner === "YOU LOSE" ? "winner" : ""}`}
        >
          <div className="winner-div">
            <div>
              <div></div>
            </div>
          </div>
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

const StyledWinner = styled(motion.section)`
  width: 100%;
  align-items: center;
  padding: 0 20%;
  .flex-col {
    align-items: center;
    h3 {
      font-size: 1.5rem;
      color: white;
    }
  }
  .result {
    text-align: center;
    .rules-btn {
      padding: 1rem 3rem;
      background-color: white;
      color: hsl(229, 25%, 31%);
      font-size: 1.5rem;
      font-weight: lighter;
    }
    h1 {
      margin-bottom: 1rem;
      font-size: 4rem;
      color: white;
    }
  }

  .selection {
    img {
      width: 8rem;
      min-width: 40px;
    }
    .wrapper {
      padding: 3rem;
      border-width: 2rem;
    }
  }
  .winner {
    position: relative;
  }
  .winner-div {
    display: none;
  }
  .winner-div,
  .winner-div div {
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: rgba(255, 255, 255, 0.03);
    width: 80vh;
    min-height: 80vh;
    transform: translate(-50%, -50%);
    z-index: -1;
    border-radius: 50%;
  }
  .winner .winner-div {
    display: block;
    div {
      width: 80%;
      min-height: 60vh;
      div {
        width: 70%;
        min-height: 45vh;
      }
    }
  }
`;
export default Winner;
