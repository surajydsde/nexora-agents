
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

export async function installWorkflow(){
 const __dirname = path.dirname(fileURLToPath(import.meta.url));
 await fs.copy(path.join(__dirname,'../../templates/.github/workflows'),
 process.cwd()+'/.github/workflows');
 console.log('✅ Workflow installed');
}
