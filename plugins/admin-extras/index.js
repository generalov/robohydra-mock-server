/**
 * Created by Evgeniy_Generalov on 10/18/2016.
 *
 * REST API plugin for Robohydra.
 *
 * PUT /robohydra-admin/rest/heads/dynamic - removes all heads from '*dynamic*' head.
 */

const heads = require('robohydra').heads;
const qs = require('qs');
const RoboHydraHead = heads.RoboHydraHead;
const robohydraAdminBaseUrlPath = '/robohydra-admin';

/*
 * This function is needed to (1) keep backwards compatibility with
 * possibly-broken programs sending requests without the appropriate
 * Content-Type header (and so req.body won't have the parameters sent
 * in the request), while at the same time (2) not issuing a warning
 * due to the use of req.bodyParams, not deprecated.
 */
function readBodyParams(req) {
  if (req.headers['content-type'] !== 'application/x-www-form-urlencoded') {
    // deprecationWarning("make sure you correctly set Content-Type to" + " application/x-www-form-urlencoded");

    try {
      return qs.parse(req.rawBody.toString());
    } catch (e) {
      return null;
    }
  }

  return req.body;

}

exports.getBodyParts = function (conf) {
  "use strict";

  let clearDynamicHead = function (req) {
    const headName = '*dynamic*';

    for (let i = 0, len = this._plugins.length; i < len; i++) {
      if (this._plugins[i].plugin.name === headName) {
        this._plugins[i] = this._emptyPluginStructure({name: headName});
      }
    }
  };

  conf.robohydra.registerDynamicHead(
    // Clear *dynamic* heads
    new RoboHydraHead({
      name: 'restHeadsDynamic',
      method: ['PUT'],
      path: robohydraAdminBaseUrlPath + '/rest/heads/dynamic',
      handler: function (req, res, next) {
        const shouldUpdate = req.method === 'PUT' || readBodyParams(req).active === 'false';

        if (shouldUpdate) {
          clearDynamicHead.call(conf.robohydra, req);

          res.headers['content-type'] = 'application/json; charset=utf-8';
          res.statusCode = 204;
          res.send("");
        }
      }
    }),
    {priority: 'high'}
  );

  return {heads: []};
};
