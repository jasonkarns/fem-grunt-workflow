var compression = require('compression');
var errorhandler = require('errorhandler');

module.exports = function(grunt) {
  var express = require("express");
  grunt.registerTask("server", "static file development server", function() {
    var app, webPort, webRoot;
    webPort = grunt.config.get("server.web.port") || 8000;
    webRoot = grunt.config.get("server.base") || "dist";

    app = express();
    app.use(compression());
    app.use(express.static("" + (process.cwd()) + "/" + webRoot));
    app.use(errorhandler());
    app.listen(webPort);

    grunt.log.writeln("Starting express web server in \"" + webRoot + "\" on port " + webPort);

    return app;
  });
};
