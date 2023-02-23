

function hasFunds(currentBalance, amountPaying) {
    if (Number(currentBalance) >= Number(amountPaying)) {
        return true
    }
    else {
        return false
    }
}
function payBill(id, amountPaying) {
    var ibmdb = require("ibm_db");
    const dbname = process.env.DBNAME;
    const hostname = process.env.HOSTNAME;
    const port = 32459;
    const protocol = process.env.PROTOCOL;
    const uid = process.env.UID;
    const password = process.env.PASSWORD;
    connStr = `DATABASE=${dbname};HOSTNAME=${hostname};PORT=${port};PROTOCOL=${protocol};UID=${uid};PWD=${password};Security=SSL`;
    try {
        var connection = ibmdb.openSync(connStr);
        queryString = `SELECT * FROM THY13793.BANKCUSTOMERS WHERE ID='${id}'`;
        var response = connection.querySync(queryString);
        var currentBalance = response[0].BALANCE
        
        if (currentBalance >= amountPaying) {
            var newBalance = currentBalance - amountPaying;
            queryString = `UPDATE BANKCUSTOMERS SET BALANCE = ${newBalance} WHERE ID=${id}`
            var updateResponse = connection.querySync(queryString)
            return {
                message: 'Your payment has been made',
                balance: newBalance
                }
        }
        else {
            return {
                message: "You have insufficent funds",
                balance: typeof amountPaying
            }
        }
    
    }
    catch (e) {
        console.log("some error happened here: ", e);
    }

}

module.exports = payBill;