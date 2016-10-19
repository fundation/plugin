const path = require('path');
const glob = require('glob');

// Get the Plugin's root directory
const pluginPath = path.dirname(module.parent.id);

// Object to send back to fundation
let plugin = {
	name: path.basename(pluginPath)
};

// See if there are any controllers
let controllers = glob.sync(pluginPath + "/controllers/*.js");
if ( controllers ) {
	plugin.controllers = controllers;
}

module.exports = plugin;