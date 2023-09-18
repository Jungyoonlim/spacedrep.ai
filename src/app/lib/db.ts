import { Pool } from 'pg';
import { FlashCard } from '../components/FlashCard';

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: {
    rejectUnauthorized: false
  }
});

export const query = (text: string, params: any[]) => pool.query(text, params);

export const getFlashcards = async (): Promise<typeof FlashCard[]> => {
  const result = await query('SELECT * FROM flashcards', []);
  return result.rows;
};

export default {
  query,
  getFlashcards
};

