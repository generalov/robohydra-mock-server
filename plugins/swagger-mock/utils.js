/**
 * Created by Evgeniy_Generalov on 10/21/2016.
 */

/**
 * Created by Evgeniy_Generalov on 10/20/2016.
 *
 * Swagger Mock plugin for Robohydra.
 *
 * Usage
 *
 * Add swagger-mock to robohydra config
 *
 *    {"plugins": [  "swagger-mock" ] }
 *
 */
process.env.DEBUG = '*';

const http = require('http');
const util = require('util');
const heads = require('robohydra').heads;
const swaggerTools = require('swagger-tools');
const EventEmitter = require('events');
const YAML = require('yamljs');


function createSwaggerApp(swaggerDoc, options, callback) {
  'use strict';
  // Initialize the Swagger middleware
  const app = require('connect')();

  swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {
    // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
    app.use(middleware.swaggerMetadata());

    // Validate Swagger requests
    app.use(middleware.swaggerValidator());

    // Route validated requests to appropriate controller
    app.use(middleware.swaggerRouter(options));

    // Serve the Swagger documents and Swagger UI
    app.use(middleware.swaggerUi(options));

    // Start the server
    callback(app);
  });
}


class FakeServerResponse extends http.ServerResponse {
  constructor(...args) {
    super(...args);
    this.robohydraResponse = new EventEmitter();
  }

  _storeHeader(statusLine, headers) {
    super._storeHeader(statusLine, headers);
    this.robohydraResponse.emit('head', {statusCode: this.statusCode, headers: headers});
  }

  write(...args) {
    super.write(...args);
    this.robohydraResponse.emit('data', {data: args[0]});
  }

  end(...args) {
    super.end(...args);
    this.robohydraResponse.emit('end')
  }
}

class FakeSocketEmitter extends EventEmitter {

  constructor(...args) {
    super(...args);

    this.writable = true;
    this.destroyed = false;
  }

  write(...args) {
    // console.log('write', args);
  }

  destroy(...args) {
    // console.log('destroy', args);
  }

  cork(...args) {
    // console.log('cork', args);
  }

  uncork(...args) {
    // console.log('uncork', args);
  }

}


function patchRequest(req) {
  EventEmitter.call(req);
  req.listeners = (name) => [];
  req.resume = () => void 0;
  return req;
}


function patchEmitter(emitter) {
  var oldEmit = emitter.emit;
  var oldOn = emitter.on;

  emitter.emit = function () {
    var emitArgs = arguments;
    console.log('emit', emitArgs);
    oldEmit.apply(emitter, arguments);
  };

  emitter.on = function () {
    var emitArgs = arguments;
    console.log('on', emitArgs);
    oldOn.apply(emitter, arguments);
  };

  return emitter;
}

function createSwaggerMock(swaggerDoc, options) {
  return {
    handle: function (req, res) {
      createSwaggerApp(swaggerDoc, options, (app) => {
        // req.url = req.url.replace(/^\/swagger/, '');
        let socket = new FakeSocketEmitter();
        let nodeRes = new FakeServerResponse(req);
        req.socket = socket;
        nodeRes.assignSocket(req.socket);
        res.follow(nodeRes.robohydraResponse);
        app.handle(patchRequest(req), nodeRes);
      });
    }
  }
}


module.exports = {
  createSwaggerMock: createSwaggerMock,
};
