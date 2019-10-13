module.exports = {
    createAccount: () => {
        return {
            text:
                "INSERT INTO account(account_uid) values (uuid_generate_v4()) RETURNING *"
        };
    },
    getAccountInfoByAccountId: account_uid => {
        return {
            text: "SELECT * FROM account WHERE account_uid=$1",
            values: [account_uid]
        };
    }
};
