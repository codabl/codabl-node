/*
 * Brainrex API
 * Provides anomaly detection and natural language processing technlogies to blockchain developers.
 *
 * OpenAPI spec version: 1.0.1
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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Brainrex);
  }
}(this, function(expect, Brainrex) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('PointTimeSeries', function() {
      beforeEach(function() {
        instance = new Brainrex.PointTimeSeries();
      });

      it('should create an instance of PointTimeSeries', function() {
        // TODO: update the code to test PointTimeSeries
        expect(instance).to.be.a(Brainrex.PointTimeSeries);
      });

      it('should have the property timestamp (base name: "timestamp")', function() {
        // TODO: update the code to test the property timestamp
        expect(instance).to.have.property('timestamp');
        // expect(instance.timestamp).to.be(expectedValueLiteral);
      });

      it('should have the property value (base name: "value")', function() {
        // TODO: update the code to test the property value
        expect(instance).to.have.property('value');
        // expect(instance.value).to.be(expectedValueLiteral);
      });

    });
  });

}));