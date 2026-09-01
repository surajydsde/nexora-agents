
import inquirer from 'inquirer';
import { installFull, installCopilot, installClaude, installGemini } from '../installers/full.js';

export async function initCommand() {
  try {
    const { choice } = await inquirer.prompt([{
      type: 'list',
      name: 'choice',
      message: 'Select AI assistant setup:',
      choices: [
        'Universal AI Setup',
        'GitHub Copilot',
        'Claude Code',
        'Gemini CLI',
        'Exit'
      ]
    }]);

    if (choice === 'Universal AI Setup') await installFull();
    if (choice === 'GitHub Copilot') await installCopilot();
    if (choice === 'Claude Code') await installClaude();
    if (choice === 'Gemini CLI') await installGemini();
    if (choice === 'Exit') {
      console.log('👋 Nexora Agents cancelled.');
    }
  } catch (error) {
    if (error && error.name === 'ExitPromptError') {
      console.log('👋 Nexora Agents cancelled.');
      return;
    }

    throw error;
  }
}
