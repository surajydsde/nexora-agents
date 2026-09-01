#!/usr/bin/env node
import { Command } from 'commander';
import { initCommand } from '../src/commands/init.js';
import { doctorCommand } from '../src/commands/doctor.js';
import { listCommand } from '../src/commands/list.js';

const program = new Command();
program.name('nexora-agents');

program.command('init').description('Install Nexora').action(initCommand);
program.command('doctor').description('Validate installation').action(doctorCommand);
program.command('list').description('List agents').action(listCommand);

program.parse();
