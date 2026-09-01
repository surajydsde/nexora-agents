
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

export async function installFull(){
 const __dirname = path.dirname(fileURLToPath(import.meta.url));
 await fs.copy(path.join(__dirname,'../../templates'),process.cwd());
 console.log('✅ Full workflow installed');
}
