[![Build Status](https://travis-ci.org/womenhackfornonprofits/pimpmycause-rebuild.svg?branch=master)](https://travis-ci.org/womenhackfornonprofits/pimpmycause-rebuild)
[![Test Coverage](https://codeclimate.com/github/womenhackfornonprofits/pimpmycause-rebuild/badges/coverage.svg)](https://codeclimate.com/github/womenhackfornonprofits/pimpmycause-rebuild/coverage)
[![Code Climate](https://codeclimate.com/github/womenhackfornonprofits/pimpmycause-rebuild/badges/gpa.svg)](https://codeclimate.com/github/womenhackfornonprofits/pimpmycause-rebuild)

# Pimp My Cause
Rebuild of the [Pimp My Cause](http://www.pimpmycause.org/) website. Powered by [Women Hack For Non Profits](womenhackfornonprofits.com)

## Set Up Your Machine for the Project
1. Install [NPM](https://nodejs.org/)
2. Install [Grunt](http://gruntjs.com/getting-started)
4. Install [Bower](http://bower.io/#install-bower)
5. Install [MongoDB](https://docs.mongodb.org/manual/installation/)
6. Install PencilBlue command line interface tools: `npm install -g pencilblue-cli`

*Notes*: you might need to use `sudo`.
For Mac users it is recommended to install npm via [Homebrew](https://github.com/Homebrew/install).
Please make sure your Homebrew is up-to-date and healthy (`brew doctor`) before running `npm install`.

For more information about installing PencilBlue please visit the [wiki](https://github.com/pencilblue/pencilblue/wiki/Quickstart:-Installation).

## Running the project on your local machine
0. Clone the repo: `git clone git@github.com:womenhackfornonprofits/pimpmycause-rebuild.git`
1. Make sure your local mongo is up and running by running: `mongod`
2. In a new terminal tab (or a new terminal on windows) `cd` into the repo and run:
   `npm install` (you might need to use `sudo`)
3. `bower install`
4. `grunt`
5. `nodemon main`

This will connect the application to your local mongo instance and will start the PencilBlue CMS. You will then be able to view it in your browser on [`http://localhost:8080/`](http://localhost:8080/)


## Seeding your local database
To add data to your local mongo 'pimp_my_cause' database, you will first need to make sure that 'mongod' is running, then in a new tab of the terminal follow the steps:
1. `mongo`
2. `use pimp_my_cause`
3. `load('./seeder.js')`
you should get `ture` if there are no errors
4.  `db.getCollectionNames()`
You should get a list of all the collections in the 'pimp_my_cause' database.
*Note*: You will need to go through these steps only when you want to reset your local
'pimp_my_cause' database. There is no need to run this every time you are working on the project.

## Technology Stack
| Backend       | Frontend          |
| ------------- |:-----------------:|
| Node.js       | HTML              |
| MongoDB       | CSS               |  

## Continuous Integration, Code Coverage and Unit Tests
All builds are performed by [Travis-CI](travis-ci.org) and can found [here](https://travis-ci.org/womenhackfornonprofits/pimpmycause-rebuild/). To view details of our code coverage visit [Code Climate](https://codeclimate.com/github/womenhackfornonprofits/pimpmycause-rebuild) and we are using [Mocha](https://mochajs.org) as our testing framework.

## The Team
#### Front End Developers
- [Liliana Kastilio](https://github.com/lili2311)
- [Rhonda Impey](https://github.com/rimpey)

#### Back End Developers
- [Tanya Powell](https://github.com/tanyapowell)
- [Tzhe'ela Trooper](https://github.com/MsToT)
- [Yana Bartzi](https://github.com/yanabar)

#### Testers/QA
- [Emma Short](https://github.com/EmmaGS)



Notes:
Please review the [PencilBlue repo](https://github.com/pencilblue/pencilblue) for source code updates and [PencilBlue APIs](http://pencilblue.github.io/) for documentations.

For latest updates and FAQ, please visit the [PencilBlue Gitter](https://gitter.im/pencilblue/pencilblue)
