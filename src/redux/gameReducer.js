import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selection: null,
  computerSelection: null,
  score: 0,
  winner: "draw",
};

const gameReducer = createSlice({
  name: "game",
  initialState,
  reducers: {
    setSelection: (state, action) => {
      state.selection = action.payload;
    },
    setComputerSelection: (state, action) => {
      state.computerSelection = action.payload;
    },
    setWinner: (state) => {
      if (state.selection && state.computerSelection) {
        if (state.computerSelection.selection === state.selection.selection)
          state.winner = "draw";
        else if (state.selection.beats === state.computerSelection.selection){
            state.winner = "You Win";
            state.score++;
        }
        else state.winner = "The House Wins";
      }
    },
  },
});

export const { setSelection, setComputerSelection, setWinner } =
  gameReducer.actions;
export default gameReducer.reducer;
