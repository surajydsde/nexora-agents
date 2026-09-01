
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

export async function installAgents(){
 const __dirname = path.dirname(fileURLToPath(import.meta.url));
 await fs.copy(path.join(__dirname,'../../templates/.github/agents'),
 process.cwd()+'/.github/agents');
 console.log('✅ Agents installed');
}
