import fs from 'fs';

export function doctorCommand() {
  [
    'AGENTS.md',
    'CLAUDE.md',
    'GEMINI.md',
    '.nexora/config.json'
  ].forEach((file) => console.log(fs.existsSync(file) ? `✓ ${file}` : `✗ ${file}`));
}
