import React from "react";
import styled from "styled-components";
import Selection from "./Selection";

import paper from "../assets/icon-paper.svg";
import rock from "../assets/icon-rock.svg";
import scissor from "../assets/icon-scissors.svg";

const selections = [
  {
    logo: paper,
    bg: "paper",
  },
  {
    logo: rock,
    bg: "rock",
  },
  {
    logo: scissor,
    bg: "scissor",
  },
];
const Selections = () => {
  return (
    <StyledSelections className="flex">
      {selections.map((selection, index) => (
        <Selection key={index} logo={selection.logo} bg={selection.bg} />
      ))}
    </StyledSelections>
  );
};

const StyledSelections = styled.section`
  align-items: center;
`;
export default Selections;
