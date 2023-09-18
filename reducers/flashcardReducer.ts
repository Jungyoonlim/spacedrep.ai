import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FlashcardState {
  flashcards: any[];
}

const initialState: FlashcardState = {
  flashcards: [],
};

const flashcardSlice = createSlice({
  name: 'flashcards',
  initialState,
  reducers: {
    setFlashcards(state, action: PayloadAction<any[]>) {
      state.flashcards = action.payload;
    },
    // Add other actions here...
  },
});

export const { setFlashcards } = flashcardSlice.actions;

export default flashcardSlice.reducer;