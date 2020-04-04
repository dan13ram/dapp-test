var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
web3.eth.getAccounts().then(function(accounts) {
    web3.eth.getBalance(accounts[0]).then(function(balance) {
        console.log("account 0:", accounts[0]);
        console.log("balance 0:", web3.utils.fromWei(balance, "ether"));
        web3.eth.sendTransaction({
            from: accounts[1],
            to: accounts[0],
            value: web3.utils.toWei("4", "ether"),
            gasLimit: 22000,
            gasPrice: web3.utils.toWei("20", "gwei")
        }).then(function(result, error) {
            console.log("Transaction result:", result);
            web3.eth.getBalance(accounts[1]).then(function(balance) {
                console.log("account 1:", accounts[1]);
                console.log("balance 1:", web3.utils.fromWei(balance, "ether"));
            }).catch(err => {console.log("error:", err);});
        }).catch(err => {console.log("error:", err);});
    }).catch(err => {console.log("error:", err);});
}).catch(err => {console.log("error:", err);});
