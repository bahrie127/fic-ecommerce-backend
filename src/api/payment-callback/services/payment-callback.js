'use strict';

/**
 * payment-callback service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::payment-callback.payment-callback');
