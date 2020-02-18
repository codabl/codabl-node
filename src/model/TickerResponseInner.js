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
    root.Codabl.TickerResponseInner = factory(root.Codabl.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TickerResponseInner model module.
   * @module model/TickerResponseInner
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>TickerResponseInner</code>.
   * @alias module:model/TickerResponseInner
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>TickerResponseInner</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TickerResponseInner} obj Optional instance to populate.
   * @return {module:model/TickerResponseInner} The populated <code>TickerResponseInner</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('lastUpdated'))
        obj.lastUpdated = ApiClient.convertToType(data['lastUpdated'], 'Date');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('percentChange24hUsd'))
        obj.percentChange24hUsd = ApiClient.convertToType(data['percentChange24hUsd'], 'Number');
      if (data.hasOwnProperty('priceBtc'))
        obj.priceBtc = ApiClient.convertToType(data['priceBtc'], 'Number');
      if (data.hasOwnProperty('priceUsd'))
        obj.priceUsd = ApiClient.convertToType(data['priceUsd'], 'Number');
      if (data.hasOwnProperty('symbol'))
        obj.symbol = ApiClient.convertToType(data['symbol'], 'String');
    }
    return obj;
  }

  /**
   * Closing price quote of the time frame with two decimal points
   * @member {Date} lastUpdated
   */
  exports.prototype.lastUpdated = undefined;

  /**
   * Highest price of the time frame with two decimal points
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * Percetange change in the last 24 hours
   * @member {Number} percentChange24hUsd
   */
  exports.prototype.percentChange24hUsd = undefined;

  /**
   * Opening price quote of the time frame with two decimal points
   * @member {Number} priceBtc
   */
  exports.prototype.priceBtc = undefined;

  /**
   * Timestamp of the beggining of the frame
   * @member {Number} priceUsd
   */
  exports.prototype.priceUsd = undefined;

  /**
   * Volume of currency exchanged in the time frame with two decimal points
   * @member {String} symbol
   */
  exports.prototype.symbol = undefined;

  return exports;

}));
