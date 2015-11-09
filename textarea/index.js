var app = module.exports = require('derby').createApp('textarea', __filename);
app.use(require('derby-debug'));
app.serverUse(module, 'derby-jade');
app.serverUse(module, 'derby-stylus');
app.use(require('d-textarea-mc'));
app.loadViews(__dirname);
app.loadStyles(__dirname);

app.get('/', function(page, model) {

  model.subscribe('textarea.message', 'textarea.cursors', function() {
    page.render();
  });
});