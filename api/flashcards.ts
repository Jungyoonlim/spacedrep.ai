import { NextApiRequest, NextApiResponse } from 'next';
import { query } from '../../app/lib/db';
import { generateFlashcards } from '../../app/lib/openai';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const result = await query('SELECT * FROM flashcards', []);
        return res.status(200).json(result.rows);
      } catch (error) {
        return res.status(500).json({ error: 'Unable to fetch flashcards.' });
      }

    case 'POST':
      const { text } = req.body;
      if (!text) {
        return res.status(400).json({ error: 'Text is required.' });
      }

      try {
        const flashcardText = await generateFlashcards(text);
        const result = await query('INSERT INTO flashcards (text) VALUES ($1) RETURNING *', [flashcardText]);
        return res.status(201).json(result.rows[0]);
      } catch (error) {
        return res.status(500).json({ error: 'Unable to generate flashcard.' });
      }

    default:
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
}
