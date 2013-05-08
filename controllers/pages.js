var cms = require('../dataAccess/mongoProvider');

exports.add = function (req, res) {

    res.render('pages/add', {
        title: "Add a new page"
    });

};

exports.addPost = function (req, res) {
    var item = {
        title: req.param('title'),
        content: req.param('content')
    };

    var s = new cms.store();
    s.newPage(item, function (err, result) {
        if (err) res.send("D'oh!");
        else res.render("pages/addSuccess", {
            title: "Page added successfully"
        });
    });
};

exports.index = function (req, res) {

    var s = new cms.store();
    s.getAll(function (err, result) {
        if (err) res.render("500");
        else res.render('pages/index', { title: "test", pages: result });
    });
};
