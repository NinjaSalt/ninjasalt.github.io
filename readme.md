######## BUILD INSTRUCTIONS ########
If you don't have SASS installed please install SASS with:
sudo gem install sass (on Mac please see http://sass-lang.com/install for help)

If you don't have nodemon installed globally please install it with with:
sudo npm install -g nodemon

Before making a build run:
npm install
from the command line.

To build CSS run:
npm run buildcss
from the command line.

To build JS run:
npm run buildjs
from the command line.

To watch CSS run:
npm run watchcss
from the command line.

To watch JS run:
npm run watchjs
from the command line.

If you are in a UNIX environment you can watch both CSS and JS with:
npm run watch
from the command line.


######## UNIT TESTING ########
To run a test use:
node ./tests/testToRun.js