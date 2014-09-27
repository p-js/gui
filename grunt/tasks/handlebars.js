module.exports = {
  options: {
    namespace: 'Templates'
  },
  all: {
    files: {
      'compiled-templates/template.js': ['src/ad-display/template.html',
        'src/controls/template.html',
        'src/top-panel/top-panel.html'
      ]
    }
  }
};