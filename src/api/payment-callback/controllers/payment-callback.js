'use strict';

/**
 * payment-callback controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::payment-callback.payment-callback', ({ strapi }) => ({
    async create(ctx) {
        let requestData = ctx.request.body;
        console.log('request: ', requestData);

        let order = await strapi.service('api::order.order').findOne(requestData.order_id);
        let inputData = { 'data': { 'history': requestData } };

        const result = await strapi.service('api::payment-callback.payment-callback').create(inputData);

        let params = {}

        if (requestData.transaction_status == 'settlement') {
            params = { 'data': { 'statusOrder': 'purchased' } }
        } else {
            params = { 'data': { 'statusOrder': 'cancel' } }
        }

        let updateOrder = await strapi.service('api::order.order').update(requestData.order_id, params);

        console.log('update data: ', updateOrder);

        return { 'data': updateOrder }
    }
}));
