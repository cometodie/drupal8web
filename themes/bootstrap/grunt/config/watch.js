module.exports = function (grunt, options) {
  return {
    less: {
      files: ['starterkits/event/**/*.less'],
      tasks: ['compile']
    }
  }
}
