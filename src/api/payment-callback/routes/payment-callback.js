'use strict';

/**
 * payment-callback router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::payment-callback.payment-callback');
