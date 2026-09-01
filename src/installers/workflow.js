import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const templatesDir = path.join(__dirname, '../../templates/.github/workflows');

export async function installWorkflow() {
  const targetDir = path.join(process.cwd(), '.github', 'workflows');
  await fs.ensureDir(targetDir);

  const entries = await fs.readdir(templatesDir);
  for (const entry of entries) {
    const src = path.join(templatesDir, entry);
    const dest = path.join(targetDir, entry);

    if (await fs.pathExists(dest)) {
      console.log(`↷ Skipped existing file: ${dest}`);
      continue;
    }

    await fs.copy(src, dest);
  }

  console.log('✅ Workflow installed');
}
