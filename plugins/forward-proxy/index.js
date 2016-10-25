/**
 * Created by Evgeniy_Generalov on 10/11/2016.
 *
 * Forward HTTP proxy plugin for Robohydra.
 *
 * It's allows to use a Robohydra server as HTTP proxy.
 * The setting HTTP proxy in your browser with Robohydra's URL
 * allows Robohydra to control all HTTP traffic between browser and web services.
 */
const heads = require('robohydra').heads;
const RoboHydraHead = heads.RoboHydraHead;


exports.getBodyParts = function (conf) {
  "use strict";

  // Register the head dynamically, instead of a normal head part of
  // the plugin, so it has precedence over all other dynamic heads.
  conf.robohydra.registerDynamicHead(
    new RoboHydraHead({
      name: 'forward-proxy',
      path: '/.*',
      handler: function (req, res, next) {
        req.url = req.url.replace(/(^http:\/\/)(.*?\/)/, "/$2");
        delete req.headers['proxy-connection'];
        next(req, res);
      }
    }),
    {priority: 'high'}
  );

  return {heads: []};
};
