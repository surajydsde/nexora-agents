#!/usr/bin/env node
import { Command } from 'commander';
import { initCommand } from '../src/commands/init.js';

const program = new Command();
program.name('nexora-agents');

program
  .command('init')
  .description('Install Nexora Agents')
  .action(initCommand);

program.parse();
