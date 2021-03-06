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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Codabl) {
      root.Codabl = {};
    }
    root.Codabl.SupportedExchanges = factory(root.Codabl.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The SupportedExchanges model module.
   * @module model/SupportedExchanges
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>SupportedExchanges</code>.
   * @alias module:model/SupportedExchanges
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>SupportedExchanges</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SupportedExchanges} obj Optional instance to populate.
   * @return {module:model/SupportedExchanges} The populated <code>SupportedExchanges</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('bestCaseFee'))
        obj.bestCaseFee = ApiClient.convertToType(data['bestCaseFee'], 'Number');
      if (data.hasOwnProperty('worstCaseFee'))
        obj.worstCaseFee = ApiClient.convertToType(data['worstCaseFee'], 'Number');
      if (data.hasOwnProperty('exchange'))
        obj.exchange = ApiClient.convertToType(data['exchange'], 'String');
    }
    return obj;
  }

  /**
   * Best fee scenario offered by the market
   * @member {Number} bestCaseFee
   */
  exports.prototype.bestCaseFee = undefined;

  /**
   * Limit depth to extract from the orderbook
   * @member {Number} worstCaseFee
   */
  exports.prototype.worstCaseFee = undefined;

  /**
   * Name of the data format availables (standard)
   * @member {String} exchange
   */
  exports.prototype.exchange = undefined;

  return exports;

}));
