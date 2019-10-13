const _ = require("lodash");

module.exports = {
    getActiveOrdersByAccountId: account_uid => {
        return {
            text:
                "SELECT * FROM orders WHERE account_uid=$1 AND order_status=0",
            values: [account_uid]
        };
    },
    getOrderHistoryByAccountId: account_uid => {
        return {
            text:
                "SELECT * FROM orders WHERE account_uid=$1 AND order_status=1",
            values: [account_uid]
        };
    },
    createOrder: values => {
        return {
            text:
                "INSERT INTO orders (order_uid, created_at, exchange, order_type, order_status, volume, placing_price, take_profit_price, stop_loss_price, account_uid) values (uuid_generate_v4(), NOW(), $1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
            values
        };
    }
};
