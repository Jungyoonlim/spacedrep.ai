import React, { useState } from 'react';
import { FlashCard } from './FlashCard';
import FlashCardEditor from './FlashCardEditor';

type FlashCardType = {
  id: number;
  term: string;
  definition: string;
};

type FlashCardDeckProps = {
  flashcards: FlashCardType[];
  onEdit: OnEditType;
};

type OnEditType = (flashcard: FlashCardType) => void;

const FlashCardDeck: React.FC<FlashCardDeckProps> = ({ flashcards }) => {
  const [editingFlashcard, setEditingFlashcard] = useState<FlashCardType | null>(null);

  const handleEdit: OnEditType = (flashcard) => {
    // Ensure the flashcard object has all the properties defined in FlashCardType
    if ('id' in flashcard && 'term' in flashcard && 'definition' in flashcard) {
      setEditingFlashcard(flashcard);
    } else {
      console.error('Invalid flashcard object. It must have id, term, and definition properties.');
    }
  };

  const handleSave = (updatedFlashcard: FlashCardType) => {
    const updatedFlashcards = flashcards.map(flashcard =>
      flashcard.id === updatedFlashcard.id ? updatedFlashcard : flashcard
    );
    // TODO: Save updatedFlashcards to database
    setEditingFlashcard(null);
  };

  const handleCancel = () => {
    setEditingFlashcard(null);
  };

  return (
    <div className="flashcard-deck">
      {flashcards.map(flashcard => (
        editingFlashcard && editingFlashcard.id === flashcard.id ? (
          <FlashCardEditor
            key={flashcard.id}
            flashcard={flashcard}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        ) : (
          <FlashCard
            key={flashcard.id}
            flashcard={flashcard}
            onEdit={handleEdit}
          />
        )
      ))}
    </div>
  );
};

export default FlashCardDeck;


