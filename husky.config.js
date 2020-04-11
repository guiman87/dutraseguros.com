module.exports = {
  hooks: {
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS  --no-verify',
    'pre-commit': 'npm test',
  },
};
