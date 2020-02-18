/*
 * Codabl Community API
 * The Codabl API is a collection of analytics tools and data integrations made for blockchain developers. In particular we offer Natural Language Processing and Anomaly detection algorithms that have been fine tune to understand text data and time series in the domain speficic setting of cryptocurrency and blockchain technology. This technology is intended to be use as building blocks to bigger applications, we offer examples on how to use them for Trading Backtesting and Smart Contract anomaly monitoring.
 *
 * OpenAPI spec version: 0.1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.10
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/TickerResponseInner'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TickerResponseInner'));
  } else {
    // Browser globals (root is window)
    if (!root.Codabl) {
      root.Codabl = {};
    }
    root.Codabl.TickerResponse = factory(root.Codabl.ApiClient, root.Codabl.TickerResponseInner);
  }
}(this, function(ApiClient, TickerResponseInner) {
  'use strict';

  /**
   * The TickerResponse model module.
   * @module model/TickerResponse
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>TickerResponse</code>.
   * @alias module:model/TickerResponse
   * @class
   * @extends Array
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>TickerResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TickerResponse} obj Optional instance to populate.
   * @return {module:model/TickerResponse} The populated <code>TickerResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      ApiClient.constructFromObject(data, obj, 'TickerResponseInner');
    }
    return obj;
  }

  Object.setPrototypeOf(exports.prototype, new Array());
  return exports;

}));
