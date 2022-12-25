import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setSelection, setComputerSelection, updateScore, setWinner } from "../redux/gameReducer";

import paper from "../assets/icon-paper.svg";
import rock from "../assets/icon-rock.svg";
import scissor from "../assets/icon-scissors.svg";

const gameLogic = [
  {
    selection: "paper",
    icon: paper,
    beats: "rock",
  },
  {
    selection: "rock",
    icon: rock,
    beats: "scissor",
  },
  {
    selection: "scissor",
    icon: scissor,
    beats: "paper",
  },
];
const Selection = ({ bg, logo }) => {
    
    const chooseSelection = () => {

    }
  return (
    <StyledSelection onClick={chooseSelection}>
      <div className={`wrapper ${bg}`}>
        <img src={logo} alt={bg} />
      </div>
    </StyledSelection>
  );
};

const StyledSelection = styled.div`
  .wrapper {
    background-color: white;
    padding: 1.5rem;
    border-radius: 50%;
    width: fit-content;
  }
  .rock {
    border: 1rem solid hsl(349, 71%, 52%);

  }
  .paper {
    border: 1rem solid hsl(230, 89%, 62%);

  }
  .scissor {
    border: 1rem solid hsl(39, 89%, 49%);

  }
`;

export default Selection;
