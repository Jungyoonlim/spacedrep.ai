import React, { useState } from 'react';

type FlashCardType = {
  id: number; 
  term: string;
  definition: string;
};

type FlashCardEditorProps = {
  flashcard: FlashCardType;
  onSave: (flashcard: FlashCardType) => void;
  onCancel: () => void;
};

const FlashCardEditor: React.FC<FlashCardEditorProps> = ({ flashcard, onSave, onCancel }) => {
  const [title, setTitle] = useState(flashcard.term);
  const [description, setDescription] = useState(flashcard.definition);

  const handleSave = () => {
    onSave({
      ...flashcard,
      term: title,
      definition: description,
    });
  };

  return (
    <div className="flashcard-editor">
      <input
        className="flashcard-title-input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="flashcard-description-input"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div className="flashcard-editor-actions">
        <button className="save-button" onClick={handleSave}>Save</button>
        <button className="cancel-button" onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default FlashCardEditor;
