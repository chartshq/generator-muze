const path = require('path');
const yosay = require('yosay');
const chalk = require('chalk');
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  async prompting() {
    this.inputs = await this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Project name',
        default: 'AwesomeMuze',
      },
    ]);
    this.destinationRoot(this.destinationPath(this.inputs.name));
  }

  writing() {
    this.fs.copy(
      this.templatePath('**/*'),
      this.destinationRoot(),
    );

    this.fs.copy(
      this.templatePath('.*'),
      this.destinationRoot(),
    );

    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      { name: path.basename(this.inputs.name) },
    );

    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('README.md'),
      { name: path.basename(this.inputs.name) },
    );
  }

  install() {
    this.npmInstall();
  }

  end() {
    this.log(yosay('Thanks for trying out MuzeJS'));

    this.log(`  ${chalk.green('cd')} ${this.inputs.name}`);
    this.log(`  ${chalk.green('npm start')}`);
    this.log('');
  }
};
