var RestClient = require('rest-facade').Client;
var ArgumentError = require('rest-facade').ArgumentError;
var utils = require('../utils');


/**
 * Simple facade for consuming a REST API endpoint.
 * @external RestClient
 * @see https://github.com/ngonzalvez/rest-facade
 */


/**
 * @class RulesManager
 * The rule class provides a simple abstraction for performing CRUD operations
 * on Auth0 RulesManagers.
 * @constructor
 * @memberOf module:management
 *
 * @param {Object} options            The client options.
 * @param {String} options.baseUrl    The URL of the API.
 * @param {Object} [options.headers]  Headers to be included in all requests.
 */
var RulesManager = function (options) {
  if (options === null || typeof options !== 'object') {
    throw new ArgumentError('Must provide manager options');
  }

  if (options.baseUrl === null || options.baseUrl === undefined) {
    throw new ArgumentError('Must provide a base URL for the API');
  }

  if ('string' !== typeof options.baseUrl || options.baseUrl.length === 0) {
    throw new ArgumentError('The provided base URL is invalid');
  }

  /**
   * Options object for the Rest Client instance.
   *
   * @type {Object}
   */
  var apiOptions = {
    headers: options.headers,
    query: { repeatParams: false }
  };

  /**
   * Provides an abstraction layer for performing CRUD operations on
   * {@link https://auth0.com/docs/api/v2#!/RulesManagers Auth0 RulesManagers}.
   *
   * @type {external:RestClient}
   */
  this.resource = new RestClient(options.baseUrl + '/rules/:id ', apiOptions);
};


/**
 * Create a new rule.
 *
 * @method    create
 * @memberOf  module:management.RulesManager.prototype
 *
 * @example
 * management.rules.create(data, function (err) {
 *   if (err) {
 *     // Handle error.
 *   }
 *
 *   // Rule created.
 * });
 *
 * @param   {Object}    data     Rule data object.
 * @param   {Function}  [cb]     Callback function.
 *
 * @return  {Promise|undefined}
 */
utils.wrapPropertyMethod(RulesManager, 'create', 'resource.create');


/**
 * Get all rules.
 *
 * @method    getAll
 * @memberOf  module:management.RulesManager.prototype
 *
 * @example
 * management.rules.getAll(function (err, rules) {
 *   console.log(rules.length);
 * });
 *
 * @param   {Function}  [cb]     Callback function.
 *
 * @return  {Promise|undefined}
 */
utils.wrapPropertyMethod(RulesManager, 'getAll', 'resource.getAll');


/**
 * Get an Auth0 rule.
 *
 * @method    get
 * @memberOf  module:management.RulesManager.prototype
 *
 * @example
 * management.rules.get({ id: RULE_ID }, function (err, rule) {
 *   if (err) {
 *     // Handle error.
 *   }
 *
 *   console.log(rule);
 * });
 *
 * @param   {Object}    params        Rule parameters.
 * @param   {String}    params.id     Rule ID.
 * @param   {Function}  [cb]          Callback function.
 *
 * @return  {Promise|undefined}
 */
utils.wrapPropertyMethod(RulesManager, 'get', 'resource.get');


/**
 * Update an existing rule.
 *
 * @method    update
 * @memberOf  module:management.RulesManager.prototype
 *
 * @example
 * var data = { name: 'New name' };
 * var params = { id: RULE_ID };
 *
 * // Using auth0 instance.
 * management.updateRule(params, data, function (err, rule) {
 *   if (err) {
 *     // Handle error.
 *   }
 *
 *   console.log(rule.name);  // 'New name'
 * });
 *
 * // Using the rules manager directly.
 * management.rules.update(params, data, function (err, rule) {
 *   if (err) {
 *     // Handle error.
 *   }
 *
 *   console.log(rule.name);  // 'New name'
 * });
 *
 * @param   {Object}    params        Rule parameters.
 * @param   {String}    params.id     Rule ID.
 * @param   {Object}    data          Updated rule data.
 * @param   {Function}  [cb]          Callback function.
 *
 * @return  {Promise|undefined}
 */
utils.wrapPropertyMethod(RulesManager, 'update', 'resource.patch');


/**
 * Delete an existing rule.
 *
 * @method    delete
 * @memberOf  module:management.RulesManager.prototype
 *
 * @example
 * management.rules.delete({ id: RULE_ID }, function (err) {
 *   if (err) {
 *     // Handle error.
 *   }
 *
 *   // Rule deleted.
 * });
 *
 * @param   {Object}    params        Rule parameters.
 * @param   {String}    params.id     Rule ID.
 * @param   {Function}  [cb]          Callback function.
 *
 * @return  {Promise|undefined}
 */
utils.wrapPropertyMethod(RulesManager, 'delete', 'resource.delete');


module.exports = RulesManager;
