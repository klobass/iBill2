module.exports = function (app) {
    var doTask = require('../controllers/doTask');

    // routes
    app.route('/count')
        .get(doTask.getCount)
    app.route('/track')
        .post(doTask.postTrack)
}