require('dotenv').config();

function getAccountInfo(id) {
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
        connection.closeSync();
        
        return response[0]
    }
    catch (e) {
        console.log("some error happened here: ", e);
    }

}

module.exports = getAccountInfo;