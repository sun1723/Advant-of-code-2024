import fs from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const readFile = (filename) => {
    const filePath = join(__dirname, '..','inputs', `${filename}.txt`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    
    // split the content into lines
    const lines = fileContent.split('\n');
    
    return lines;
}

