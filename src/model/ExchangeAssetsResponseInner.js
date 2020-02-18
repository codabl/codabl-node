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
    root.Codabl.ExchangeAssetsResponseInner = factory(root.Codabl.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ExchangeAssetsResponseInner model module.
   * @module model/ExchangeAssetsResponseInner
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>ExchangeAssetsResponseInner</code>.
   * @alias module:model/ExchangeAssetsResponseInner
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ExchangeAssetsResponseInner</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExchangeAssetsResponseInner} obj Optional instance to populate.
   * @return {module:model/ExchangeAssetsResponseInner} The populated <code>ExchangeAssetsResponseInner</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('tradinSym'))
        obj.tradinSym = ApiClient.convertToType(data['tradinSym'], 'String');
      if (data.hasOwnProperty('symbol'))
        obj.symbol = ApiClient.convertToType(data['symbol'], 'String');
    }
    return obj;
  }

  /**
   * Highest price of the time frame with two decimal points
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * Percetange change in the last 24 hours
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * Volume of currency exchanged in the time frame with two decimal points
   * @member {String} tradinSym
   */
  exports.prototype.tradinSym = undefined;

  /**
   * Volume of currency exchanged in the time frame with two decimal points
   * @member {String} symbol
   */
  exports.prototype.symbol = undefined;

  return exports;

}));
