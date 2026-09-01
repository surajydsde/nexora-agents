
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const templatesDir = path.join(__dirname, '../../templates');

async function safeCopyFile(src, dest) {
  if (await fs.pathExists(dest)) {
    console.log(`↷ Skipped existing file: ${dest}`);
    return;
  }

  await fs.copy(src, dest);
}

async function safeCopyDir(src, dest) {
  if (await fs.pathExists(dest)) {
    console.log(`↷ Skipped existing directory: ${dest}`);
    return;
  }

  await fs.copy(src, dest);
}

async function writeConfig(platform) {
  const configDir = path.join(process.cwd(), '.nexora');
  await fs.ensureDir(configDir);
  const configPath = path.join(configDir, 'config.json');

  if (await fs.pathExists(configPath)) {
    console.log(`↷ Skipped existing file: ${configPath}`);
    return;
  }

  await fs.writeJson(configPath, {
    version: '1.5.0',
    platform
  }, { spaces: 2 });
}

async function installSharedAgentDirectory() {
  const sourceDir = path.join(templatesDir, '.github', 'agents');
  const targetDir = path.join(process.cwd(), '.nexora', 'agents');
  await safeCopyDir(sourceDir, targetDir);
}

export async function installFull() {
  await safeCopyFile(path.join(templatesDir, 'AGENTS.md'), path.join(process.cwd(), 'AGENTS.md'));
  await safeCopyFile(path.join(templatesDir, 'CLAUDE.md'), path.join(process.cwd(), 'CLAUDE.md'));
  await safeCopyFile(path.join(templatesDir, 'GEMINI.md'), path.join(process.cwd(), 'GEMINI.md'));
  await installSharedAgentDirectory();
  await writeConfig('universal');
  console.log('✅ Universal AI setup installed');
}

export async function installCopilot() {
  await safeCopyFile(path.join(templatesDir, 'AGENTS.md'), path.join(process.cwd(), 'AGENTS.md'));
  await installSharedAgentDirectory();
  await writeConfig('copilot');
  console.log('✅ GitHub Copilot setup installed');
}

export async function installClaude() {
  await safeCopyFile(path.join(templatesDir, 'CLAUDE.md'), path.join(process.cwd(), 'CLAUDE.md'));
  await installSharedAgentDirectory();
  await writeConfig('claude');
  console.log('✅ Claude Code setup installed');
}

export async function installGemini() {
  await safeCopyFile(path.join(templatesDir, 'GEMINI.md'), path.join(process.cwd(), 'GEMINI.md'));
  await installSharedAgentDirectory();
  await writeConfig('gemini');
  console.log('✅ Gemini CLI setup installed');
}
