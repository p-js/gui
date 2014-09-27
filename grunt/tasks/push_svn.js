module.exports = {
  options: {
    trymkdir: true,
    remove: false
  },
  release: {
    src: './dist',
    dest: '<%= grunt.config("svnDir") %>/<%= pkg.version %><%= grunt.config("buildNumber") %>',
    tmp: './.build'
  }
};