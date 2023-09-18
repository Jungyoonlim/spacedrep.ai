import { query } from './db';

export interface Flashcard {
  id: string;
  title: string;
  description: string;
  nextReviewDate: Date;
}

export const getFlashcardsForReview = async (): Promise<Flashcard[]> => {
  const result = await query(`
    SELECT * FROM flashcards
    WHERE nextReviewDate <= NOW()
    ORDER BY nextReviewDate ASC
  `, []);

  return result.rows;
};

export const updateFlashcardReviewDate = async (flashcardId: string, nextReviewDate: Date): Promise<void> => {
  await query(`
    UPDATE flashcards
    SET nextReviewDate = $1
    WHERE id = $2
  `, [nextReviewDate, flashcardId]);
};

export const calculateNextReviewDate = (lastReviewDate: Date, reviewCount: number): Date => {
  const nextReviewDate = new Date(lastReviewDate.getTime());

  // Simple implementation of the SuperMemo 2 algorithm
  // https://www.supermemo.com/en/archives1990-2015/english/ol/sm2
  if (reviewCount === 1) {
    nextReviewDate.setDate(nextReviewDate.getDate() + 1);
  } else if (reviewCount === 2) {
    nextReviewDate.setDate(nextReviewDate.getDate() + 6);
  } else {
    nextReviewDate.setDate(nextReviewDate.getDate() + reviewCount * 5);
  }

  return nextReviewDate;
};

export const useSpacedRepetition = (flashcards: any[]) => {
  flashcards.forEach(flashcard => {
    const nextReviewDate = calculateNextReviewDate(flashcard.lastReviewDate, flashcard.reviewCount);
    updateFlashcardReviewDate(flashcard.id, nextReviewDate);
  });

  let index = 0;

  return {
    getNextFlashcard: function() {
      if (index >= flashcards.length) {
        return null;
      }
      return flashcards[index++];
    }
  }
};

