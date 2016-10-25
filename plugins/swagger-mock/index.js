process.env.DEBUG = '*';

const http = require('http');
const util = require('util');
const SwaggerMockHead = require('./heads/SwaggerMockHead');
const YAML = require('yamljs');
const createSwaggerMock = require('./utils').createSwaggerMock;


exports.getBodyParts = function (conf) {
  "use strict";

  // Register the head dynamically, instead of a normal head part of
  // the plugin, so it has precedence over all other dynamic heads.
  return {
    heads: [
      new SwaggerMockHead({
        path: '/swagger/.*',
        mountPath: '/swagger',
        handler: function (req, res) {
          const basePath = this.mountPath;
          const options = {
            useStubs: true,
            apiDocs: `${basePath}/apiDocs`,
            swaggerUi: `${basePath}/docs`
          };
          const swaggerDoc = YAML.load(__dirname + '/../../../specs/data/OpenwWatherMap.yaml');
          swaggerDoc.host = req.headers.host;
          swaggerDoc.basePath = basePath;
          createSwaggerMock(swaggerDoc, options).handle(req, res);
        }
      }),
    ]
  }
};
