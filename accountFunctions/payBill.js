

function hasFunds(currentBalance, amountPaying) {
    if (currentBalance >= amountPaying) {
        return true
    }
    else {
        return false
    }
}
function payBill(id, ammountPaying) {
    var ibmdb = require("ibm_db");
    const dbname = process.env.DBNAME;
    const hostname = process.env.HOSTNAME;
    const port = process.env.PORT;
    const protocol = process.env.PROTOCOL;
    const uid = process.env.UID;
    const password = process.env.PASSWORD;
    connStr = `DATABASE=${dbname};HOSTNAME=${hostname};PORT=${port};PROTOCOL=${protocol};UID=${uid};PWD=${password};Security=SSL`;
    try {
        var connection = ibmdb.openSync(connStr);
        queryString = `SELECT * FROM THY13793.BANKCUSTOMERS WHERE ID='${id}'`;
        var response = connection.querySync(queryString);
        var currentBalance = response[0].BALANCE
        if (hasFunds(currentBalance, ammountPaying)) {
            var newBalance = currentBalance - ammountPaying;
            queryString = `UPDATE BANKCUSTOMERS SET BALANCE = ${newBalance} WHERE ID=${id}`
            var updateResponse = connection.querySync(queryString)
            return {
                message: 'Your payment has been made',
                balance: newBalance
                }
        }
        else {
            return {
                message: 'You have insufficient funds to make this payment',
                balance: currentBalance
            }
        }
    
    }
    catch (e) {
        console.log("some error happened here: ", e);
    }

}

module.exports = payBill;