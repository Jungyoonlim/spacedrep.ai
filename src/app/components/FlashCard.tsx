import React from 'react';

interface Flashcard {
  id: number; 
  term: string;
  definition: string;
}

export type OnEditType = (flashcard: Flashcard) => void;

export const FlashCard = ({ flashcard, onEdit }: { flashcard: Flashcard, onEdit: OnEditType }) => {
  return (
    <div className="flashcard">
      <div className="flashcard-content">
        <h2 className="flashcard-title">{flashcard.term}</h2>
        <p className="flashcard-description">{flashcard.definition}</p>
      </div>
      <div className="flashcard-actions">
        <button className="edit-button" onClick={() => onEdit(flashcard)}>Edit</button>
      </div>
    </div>
  );
};
