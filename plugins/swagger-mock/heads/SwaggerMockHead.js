/**
 * Created by Evgeniy_Generalov on 10/21/2016.
 */

const robohydraHeadType = require('robohydra').robohydraHeadType;
const heads = require('robohydra').heads;

const SwaggerMockHead = robohydraHeadType({
  name: 'swagger-mock',
  parentClass: heads.RoboHydraHead,
  mandatoryProperties: ['mountPath', 'path', 'handler'],
  parentPropertyBuilder: function () {
    'use strict';
    return {
      path: this.path,
      handler: this.handler
    };
  }
});

module.exports = SwaggerMockHead;
