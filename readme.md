- pre-existing static assets

# initialize package and grunt

- npm init
- touch Gruntfile.coffee
- npm install -g grunt-cli
- npm install --save-dev grunt

# grunt concat

- npm install --save-dev grunt-contrib-concat
- configure concat
- change html page to pull in generated (concatenated) JS

# auto-run concat!

- npm install grunt-contrib-watch --save-dev
- configure watch task

# switch to less

- npm i --save-dev grunt-contrib-less
- configure less task
- convert css to less
- extract mixins
