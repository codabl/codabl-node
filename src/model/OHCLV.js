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
    root.Codabl.OHCLV = factory(root.Codabl.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The OHCLV model module.
   * @module model/OHCLV
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>OHCLV</code>.
   * @alias module:model/OHCLV
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>OHCLV</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OHCLV} obj Optional instance to populate.
   * @return {module:model/OHCLV} The populated <code>OHCLV</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('close'))
        obj.close = ApiClient.convertToType(data['close'], 'Number');
      if (data.hasOwnProperty('high'))
        obj.high = ApiClient.convertToType(data['high'], 'Number');
      if (data.hasOwnProperty('end_date'))
        obj.endDate = ApiClient.convertToType(data['end_date'], 'Date');
      if (data.hasOwnProperty('open'))
        obj.open = ApiClient.convertToType(data['open'], 'Number');
      if (data.hasOwnProperty('time'))
        obj.time = ApiClient.convertToType(data['time'], 'Date');
      if (data.hasOwnProperty('volume'))
        obj.volume = ApiClient.convertToType(data['volume'], 'Number');
      if (data.hasOwnProperty('usdVolume'))
        obj.usdVolume = ApiClient.convertToType(data['usdVolume'], 'Number');
      if (data.hasOwnProperty('btcVolume'))
        obj.btcVolume = ApiClient.convertToType(data['btcVolume'], 'Number');
      if (data.hasOwnProperty('quoteVolume'))
        obj.quoteVolume = ApiClient.convertToType(data['quoteVolume'], 'Number');
    }
    return obj;
  }

  /**
   * Closing price quote of the time frame with two decimal points
   * @member {Number} close
   */
  exports.prototype.close = undefined;

  /**
   * Highest price of the time frame with two decimal points
   * @member {Number} high
   */
  exports.prototype.high = undefined;

  /**
   * End date in YYYY/MM/DD
   * @member {Date} endDate
   */
  exports.prototype.endDate = undefined;

  /**
   * Opening price quote of the time frame with two decimal points
   * @member {Number} open
   */
  exports.prototype.open = undefined;

  /**
   * Timestamp of the beggining of the frame
   * @member {Date} time
   */
  exports.prototype.time = undefined;

  /**
   * Volume of currency exchanged in the time frame with two decimal points
   * @member {Number} volume
   */
  exports.prototype.volume = undefined;

  /**
   * Volume of currency exchanged in dollars the time frame with two decimal points
   * @member {Number} usdVolume
   */
  exports.prototype.usdVolume = undefined;

  /**
   * Volume of currency exchanged in dollars the time frame with two decimal points
   * @member {Number} btcVolume
   */
  exports.prototype.btcVolume = undefined;

  /**
   * Volume of currency exchanged in dollars the time frame with two decimal points
   * @member {Number} quoteVolume
   */
  exports.prototype.quoteVolume = undefined;

  return exports;

}));
