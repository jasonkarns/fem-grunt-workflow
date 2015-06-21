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

# watch less files

- extract 'files' config
- add less files to watcher

# serve index from generated

- npm i -D grunt-contrib-copy
- configure copy task
- update index paths

# custom server

- npm i -D express
- mkdir tasks
- create custom server task: tasks/server.js
- configure server task

# enable livereload

- configure watch task for livereload
- optional: install the chrome live-reload extension
  https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en

# clean build dirs

- npm i -D grunt-contrib-clean
- configure clean task

# prepare for build workflow

- emit CSS into dist
- copy html to dist as well

# uglify JS for build only

- npm i -D grunt-contrib-uglify
- configure uglify
- add banner

=====================

# auto-open the site

- install and configure grunt-open

# production-like task (for serving minified assets)

- create prodsim task

# split build into app and vendor

- separate js targets

# support coffeescript

- switch sources to coffee
- install/configure coffee task
- update watchers and pipeline

# top-level app directory

- move js/css/etc assets to top level assets
- update configs

# extract angular templates

- extract templates to separate files
- install/configure grunt-angular-templates

# configure sourcemaps

- swap concat task with sourcemap-aware grunt-concat-sourcemap
