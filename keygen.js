var Web3 = require('web3');
//var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
//web3.eth.getAccounts().then(function(data, error) { console.log(data); });
var EthUtil = require("ethereumjs-util");
var input = process.argv[2];


var hexToBytes = function(hex) {
    for (var bytes = [], c = 0; c<hex.length; c+= 2)
        bytes.push(parseInt(hex.substr(c, 2), 16));
    return bytes;
}

var privateKeyToAddress = function(privateKey) {
    return `0x${EthUtil.privateToAddress(hexToBytes(privateKey)).toString('hex')}`
}

console.log("Input: ", input);
var key = Web3.utils.sha3(input);
console.log("Private Key: ", key);
var output = privateKeyToAddress(key.substr(2, 66));
console.log("Address: ", output);
