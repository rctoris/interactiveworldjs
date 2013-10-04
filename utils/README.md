interactiveworldjs Build Setup
==============================

[Grunt](http://gruntjs.com/) is used for building, including concatenating, minimizing, documenting, and linting.

### Install Grunt and its Dependencies

#### Ubuntu
 1. Install Node.js and its package manager, NPM
   * `sudo apt-get install python-software-properties`
   * `sudo add-apt-repository ppa:chris-lea/node.js`
   * `sudo apt-get update && sudo apt-get install nodejs phantomjs`
 2. Install [Grunt](http://gruntjs.com/)
   * `sudo npm install -g grunt-cli karma`
   * `sudo rm -rf ~/.npm ~/tmp`
 3. Install the Grunt tasks specific to this project
   * `cd /path/to/interactiveworldjs/utils/`
   * `npm install .`
 4. (Optional) To generate the documentation, you'll need to setup Java. Documentation generation is not required for patches.
   * `echo "export JAVA_HOME=/usr/lib/jvm/default-java/jre" >> ~/.bashrc`
   * `source ~/.bashrc`

### Build with Grunt
Before proceeding, please confirm you have installed the dependencies above.

To run the build tasks:

 1. `cd /path/to/interactiveworldjs/utils/`
 2. `grunt build`

`grunt build` will concatenate and minimize the files under src and replace interactiveworldjs.js and interactiveworldjs.min.js in the build directory. It will also run the linter. This is what [Travis CI](https://travis-ci.org/WPI-RAIL/interactiveworldjs) runs when a Pull Request is submitted.

`grunt doc` will rebuild all JSDoc for the project.
