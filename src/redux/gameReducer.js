import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selection: null,
    computerSelection: null,
    score: 0,
    winner: "draw",
}

const gameReducer = createSlice({
  name: "game",
  initialState,
  reducers: {
    setSelection: (state, action) => {
      state.selection = action.payload;
    },
    setComputerSelection: (state, action) => {
      state.ComputerSelection = action.payload;
    },
    updateScore: (state) => {
        state.score++;
    },
    setWinner: (state) => {
        if(selection && computerSelection && selection.selection !== computerSelection.beats){
            if(selection.beats === computerSelection.selection)
                state.winner = "You Win";
            else
                state.winner = "The House Wins"
        }         
    }
  },
});

export const {setSelection, setComputerSelection, updateScore, setWinner} = gameReducer.actions;
export default gameReducer.reducer;