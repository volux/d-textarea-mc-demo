var derby = require('derby');
var app = module.exports = derby.createApp('textarea', __filename);

if (!derby.util.isProduction) {

  app.use(require('derby-debug'));
}
app.serverUse(module, 'derby-jade');
app.serverUse(module, 'derby-stylus');
app.use(require('d-textarea-mc'));
app.loadViews(__dirname);
app.loadStyles(__dirname);

var blankData = {text: 'Text for collaborative editing', cursors: {}, id: 'data'};

app.get('/', function (page, model, params, next) {

  var data = model.at(app.name + '.' + blankData.id);

  data.subscribe(function (err) {
    if (err) next(err);

    if (!data.get()) {
      model.add(app.name, blankData);
    }
    model.ref('_page.'+ app.name, data);

    page.render();
  });
});