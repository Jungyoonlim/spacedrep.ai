import React, { useState, useEffect } from 'react';
import { FlashCard } from './FlashCard';
import FlashCardEditor from './FlashCardEditor';
import SearchBar from './SearchBar';
import FlashCardDeck from './FlashCardDeck';
import { getFlashcards } from '../lib/db';
import { useSpacedRepetition } from '../lib/spacedRepetition';

const FlashcardApp = () => {
  const [flashcards, setFlashcards] = useState<any[]>([]);
  const [currentFlashcard, setCurrentFlashcard] = useState<any>(null);
  const [isEditing, setIsEditing] = useState(false);
  const { getNextFlashcard } = useSpacedRepetition(flashcards);

  useEffect(() => {
    loadFlashcards();
  }, []);

  const loadFlashcards = async () => {
    const flashcards = await getFlashcards();
    setFlashcards(flashcards);
    setCurrentFlashcard(getNextFlashcard());
  };

  const startEditing = (flashcard: any) => {
    setCurrentFlashcard(flashcard);
    setIsEditing(true);
  };

  const stopEditing = () => {
    setIsEditing(false);
    setCurrentFlashcard(getNextFlashcard());
  };

  const updateFlashcard = (updatedFlashcard: any) => {
    setFlashcards(flashcards.map((flashcard: any) => 
      flashcard.id === updatedFlashcard.id ? updatedFlashcard : flashcard
    ));
    stopEditing();
  };

  return (
    <div className="flashcard-app">
      <SearchBar onSearch={loadFlashcards} />
      {isEditing ? (
        <FlashCardEditor flashcard={currentFlashcard} onSave={updateFlashcard} onCancel={stopEditing} />
      ) : (
        currentFlashcard && (
          <FlashCard flashcard={currentFlashcard} onEdit={startEditing} />
        )
      )}
      <FlashCardDeck flashcards={flashcards} onEdit={startEditing} />
    </div>
  );
};

export default FlashcardApp;
