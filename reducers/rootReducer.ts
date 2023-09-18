import { combineReducers } from '@reduxjs/toolkit';
import flashcardReducer from './flashcardReducer';
// import other reducers here...

const rootReducer = combineReducers({
  flashcards: flashcardReducer,
  // other reducers go here...
});

export default rootReducer;