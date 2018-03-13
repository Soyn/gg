#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const program = require('commander');
const yaml = require('js-yaml');
const configFileName = path.join(__dirname, 'config.yml');
const context = yaml.load(fs.readFileSync(configFileName, 'utf8'));
const exec = require('child_process').exec;

program
	.option('-m --mode', 'run command')
	.action((option) => {
		switch(option) {
			case 'g':
				if(exec(`git checkout test`)){
					exec('touch');
				}
				break;
			case 't':
				console.log('Run test');
				break;
			case 'r':
				console.log('Build');
				break;
		}
	})
program.parse(process.argv);
