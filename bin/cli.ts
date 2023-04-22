#!/usr/bin/env node
import { Command } from 'commander'
import { create } from './create/index.js';
const program = new Command()
program.command('create').action(() => {
  create()
})
program.parse()
