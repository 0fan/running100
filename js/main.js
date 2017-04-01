requirejs.config({
	urlArgs: "bust=" +  (new Date()).getTime(),
	paths: {
		jquery: 'lib/jquery-1.8.3.min'
	}
});

require(['jquery', 'app'], function ($, app) {


});