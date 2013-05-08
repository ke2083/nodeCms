var pagesController = require('../controllers/pages');
var indexController = require('../controllers/index');

RouteConfig = function (app) {
    this.app = app;
}

RouteConfig.prototype.map = function () {
    this.app.get('/', indexController.index);
    this.app.get('/pages/add', pagesController.add);
    this.app.get('/pages', pagesController.index);
    this.app.post('/pages/add', pagesController.addPost);
}

exports.RouteConfig = RouteConfig;