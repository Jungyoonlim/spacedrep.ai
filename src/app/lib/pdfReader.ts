import fs from 'fs';
import pdf from 'pdf-parse';

const readPdf = async (filePath: string) => {
  try {
    const fileBuffer = fs.readFileSync(filePath);
    const data = await pdf(fileBuffer);

    return data.text;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default {
  readPdf
};

