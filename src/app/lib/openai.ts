import axios from 'axios';

const openai = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
    'Content-Type': 'application/json'
  }
});

export const generateFlashcards = async (text: string) => {
  try {
    const response = await openai.post('/engines/davinci-codex/completions', {
      prompt: text,
      max_tokens: 60,
      temperature: 0.5,
      top_p: 1
    });

    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default {
  generateFlashcards
};
