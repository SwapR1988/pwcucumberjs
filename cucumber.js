module.exports = {
  default: [
    "features/**/*.feature",
    "--require features/step_definitions/**/*.js",
    "--require features/support/**/*.js",
    "--timeout 60000",
    "--format progress",
    "--publish-quiet"
  ].join(" ")
};
