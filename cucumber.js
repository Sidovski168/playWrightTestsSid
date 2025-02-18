module.exports = {
  default: {
    require: ['./steps/**/*.js'],  // Step definitions
    format: ['progress'],           // Pretty output
    paths: ['./features/**/*.feature'], // Feature file location
    tags: 'not @ignore',            // Ignore @ignore tags
    worldParameters: {}             // World parameters
  },
};
