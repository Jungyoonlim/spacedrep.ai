import { NextApiRequest, NextApiResponse } from 'next';
import { getFlashcardsForReview, updateFlashcardReviewDate, calculateNextReviewDate, Flashcard } from '../src/app/lib/spacedRepetition';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const flashcards = await getFlashcardsForReview();
      res.status(200).json(flashcards);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching flashcards for review' });
    }
  } else if (req.method === 'POST') {
    const { flashcardId, reviewCount }: { flashcardId: string; reviewCount: number } = req.body;

    if (!flashcardId || !reviewCount) {
      return res.status(400).json({ error: 'Missing flashcardId or reviewCount in request body' });
    }

    try {
      const lastReviewDate = new Date();
      const nextReviewDate = calculateNextReviewDate(lastReviewDate, reviewCount);
      await updateFlashcardReviewDate(flashcardId, nextReviewDate);
      res.status(200).json({ message: 'Flashcard review date updated successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error updating flashcard review date' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
