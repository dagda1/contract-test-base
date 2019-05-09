const paths = require('@cutting/devtools/config/paths');

module.exports = {
  client: {
    entries: [paths.appSrc],
    ssrBuild: false,
    isStaticBuild: true
  }
};
