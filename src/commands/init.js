
import inquirer from 'inquirer';
import { installFull } from '../installers/full.js';
import { installAgents } from '../installers/agents.js';
import { installWorkflow } from '../installers/workflow.js';

export async function initCommand() {
 const { choice } = await inquirer.prompt([{
   type:'list',
   name:'choice',
   message:'What would you like to install?',
   choices:['Full Workflow','Agents Only','GitHub Workflow Only']
 }]);

 if(choice==='Full Workflow') await installFull();
 if(choice==='Agents Only') await installAgents();
 if(choice==='GitHub Workflow Only') await installWorkflow();
}
