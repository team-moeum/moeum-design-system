import fs from 'fs/promises';
import path from 'path';

const INPUT_FILE = 'figma/design-token.json';
const OUTPUT_DIR = 'src/tokens';

const sanitizeKey = (key) => key.replace(/[\s\/]+/g, '-');

export async function splitJsonFile() {
  try {
    const data = await fs.readFile(INPUT_FILE, 'utf8');
    const tokens = JSON.parse(data);

    await fs.mkdir(OUTPUT_DIR, { recursive: true });
    
    const topLevelKeys = Object.keys(tokens).filter(key => !key.startsWith('$'));
    
    const processedKeys = await Promise.all(topLevelKeys.map(async (key) => {
      const sanitizedKey = sanitizeKey(key);
      const fileName = `${sanitizedKey}.json`;
      const filePath = path.join(OUTPUT_DIR, fileName);
      
      await fs.writeFile(filePath, JSON.stringify(tokens[key], null, 2));
      console.log(`Created file: ${fileName}`);

      return sanitizedKey;
    }));

    console.log('JSON splitting completed successfully.');
    return processedKeys;
  } catch (error) {
    console.error('Error splitting JSON:', error.message);
    return [];
  }
}