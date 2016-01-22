# Women Hack for Non Profit - Pimp My Cause Rebuild

This is the website rebuild for Pimp My Cause built by a group of volunteers via Women Hack for Non Profits: Project Manager: Corinne Wichmann, Graphic Designer: Jeanette Clement, Front End Developers: Rhonda Impey and Lili Kastilio, Back End Developers: Tanya Powell, Tzhe'ela Trooper, Yana Bar and Nandhini Narasimhan and Tester: Jean Jimbo.

The front end technology stack used in this project includes pure HTML5, CSS3, JavaScript and includes the use of a front end framework called Zurb Foundation with built-in classes to style pages and JavaScript functionality.

The project structure contains files in the 'scr' source directory that end up in the 'dist' distribution directory the resulting file structure is the static website ready for deployment and able to be put into a CMS of choice. 

This project is automated using the Grunt build tool running tasks based on file changes and tasks called. 

1. Pre-processing sass files into css files
1. Post-processing css using JavaScript plugins providing fallback values for old browser compatibility
1. Performing a type of serverside include for common page elements like header/footer/nav
1. Minifying JavaScript files
1. Syncronyzing page reloads across all browsers across all devices

The .gitignore a hidden file includes a list of files that will be ignored when pushing this project to git, a couple of cache directories and the node modules that are automatically installed as dependences in the project when you run the grunt file and thus do not need to be included in the git repository. 

Most of the front end development work is done in the src directory where pages are stored in the /pages directory with partial pages in the /pages/includes directory. The /scripts/scripts.js file is a call to foundation and document ready the list of /scripts/vendors contain Foundation javascript files. 

The directory structure of the /styles folder has been heavily researched and is according to best practices. In the /styles/main.scss file all other style files are imported according to correct ordering, with a reset performed first and variables declared, followed by vendor styling and then customised styling. Of particular note is the /styles/base/_settings.scss file this will be your best friend where you are over riding foundation styles look here before you create your own styles as there is likely to be a variable that assigned a value will override styling as desired throughout.

The resulting static website can be viewed using GitHubs gh-pages added as an orphan branch containing files from the distribution file simply by running: 

    http://username.github.io/repository/
    
for example 
    
    http://womenhackfornonprofits.github.io/pimpmycause-rebuild/