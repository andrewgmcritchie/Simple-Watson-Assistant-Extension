function accountFound(id) {
    let accounts = {
        10000001: true,
        10000002: true,
        10000003: true,
        10000004: true,
        10000005: true,
        10000006: true,
        10000007: true,
        10000008: true,
        10000009: true,
        10000010: true,
        10000011: true,
        10000012: true,
        10000013: true,
        10000014: true,
        10000015: true,

    }

    if (accounts[id] === true) {
        return true
    }
    else {
        return false
    }
}

module.exports = accountFound