const path = require('path');
const glob = require('glob');

// This module will expose all of the plugin's files
module.exports = function(parent) {
  // Get the Plugin's root directory
  let pluginPath = path.dirname(parent.id);

  // Object to send back to fundation
  let plugin = {
    name: path.basename(pluginPath),
    path: pluginPath,
    controllers: glob.sync(pluginPath + '/controllers/*.js'),
    models: glob.sync(pluginPath + '/models/*.js'),
    views: pluginPath + '/views',
    public: pluginPath + '/public'
  };

  return plugin;
}