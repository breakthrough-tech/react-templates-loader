var reactTemplates = require('react-templates/src/reactTemplates');
var loaderUtils = require('loader-utils');
var fs = require('fs');
module.exports = function(source) {
	var options = loaderUtils.parseQuery(this.query);
	options.readFileSync = fs.readFileSync;
	this.cacheable && this.cacheable();
	return reactTemplates.convertTemplateToReact(source, options);
};
