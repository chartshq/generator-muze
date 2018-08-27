# Contribution Guidelines

The new features and bug fixes are merged into `develop` branch. The `master` branch
contains the latest stable release.

Please, try to follow:

* Install Yeoman globally.
* Clone the repository.
* Checkout `develop` branch.
* Create feature or bug fixing branch using `git flow`
* Install dependencies.
* Do npm link
* Add your new features or fixes.
* Send PR.

```sh
$ npm install -g yo
$ git clone https://github.com/chartshq/generator-muze.git
$ cd generator-muze
$ git checkout develop
$ git flow init
$ git flow feature start <your-feature-branch-name>
$ npm install
$ npm link
```