/**
 * This plugin uses a User-Agent header to isolate mocking rules for different browsers.
 *
 * It allows to run tests in different browsers simultaneously without conflicts.
 *
 * Note: Use the same User-Agent header as your browser then adding a mocking rules.
 */


exports.getBodyParts = function () {
  return {};
};

exports.getSummonerTraits = function () {
  return {
    hydraPicker: function (req) {
      // USER_AGENT header is used to associate mocks with concrete browser to
      // run tests in different browsers simultaneously without conflicts.
      return req.headers['user-agent'] || '*default*';
    }
  };
};

