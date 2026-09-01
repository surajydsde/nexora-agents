import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const templatesDir = path.join(__dirname, '../../templates/.github/agents');

export async function installAgents() {
  const githubTargetDir = path.join(process.cwd(), '.github', 'agents');
  const sharedTargetDir = path.join(process.cwd(), '.nexora', 'agents');

  await fs.ensureDir(githubTargetDir);
  await fs.ensureDir(sharedTargetDir);

  const entries = await fs.readdir(templatesDir);
  for (const entry of entries) {
    const src = path.join(templatesDir, entry);
    const githubDest = path.join(githubTargetDir, entry);
    const sharedDest = path.join(sharedTargetDir, entry);

    if (!(await fs.pathExists(githubDest))) {
      await fs.copy(src, githubDest);
    } else {
      console.log(`↷ Skipped existing file: ${githubDest}`);
    }

    if (!(await fs.pathExists(sharedDest))) {
      await fs.copy(src, sharedDest);
    } else {
      console.log(`↷ Skipped existing file: ${sharedDest}`);
    }
  }

  console.log('✅ Agents installed');
}
