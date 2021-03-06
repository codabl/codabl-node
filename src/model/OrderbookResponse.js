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
    root.Codabl.OrderbookResponse = factory(root.Codabl.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The OrderbookResponse model module.
   * @module model/OrderbookResponse
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>OrderbookResponse</code>.
   * @alias module:model/OrderbookResponse
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>OrderbookResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderbookResponse} obj Optional instance to populate.
   * @return {module:model/OrderbookResponse} The populated <code>OrderbookResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('base_trading_symbol'))
        obj.baseTradingSymbol = ApiClient.convertToType(data['base_trading_symbol'], 'String');
      if (data.hasOwnProperty('exchange'))
        obj.exchange = ApiClient.convertToType(data['exchange'], 'String');
      if (data.hasOwnProperty('limit'))
        obj.limit = ApiClient.convertToType(data['limit'], 'Number');
      if (data.hasOwnProperty('quote_trading_symbol'))
        obj.quoteTradingSymbol = ApiClient.convertToType(data['quote_trading_symbol'], 'String');
    }
    return obj;
  }

  /**
   * Name of the currency pair
   * @member {String} baseTradingSymbol
   */
  exports.prototype.baseTradingSymbol = undefined;

  /**
   * Name of the exchange
   * @member {String} exchange
   */
  exports.prototype.exchange = undefined;

  /**
   * Limit depth to extract from the orderbook
   * @member {Number} limit
   */
  exports.prototype.limit = undefined;

  /**
   * Name of the data format availables (standard)
   * @member {String} quoteTradingSymbol
   */
  exports.prototype.quoteTradingSymbol = undefined;

  return exports;

}));
