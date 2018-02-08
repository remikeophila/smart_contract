const Web3 = require('web3');
const BigNumber = require('bignumber.js');

var abi = [
	{
		"constant": true,
		"inputs": [],
		"name": "value",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "seller",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "locked",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "client",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "canLock",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "canUnlock",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "pay",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "refund",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_seller",
				"type": "address"
			},
			{
				"name": "_client",
				"type": "address"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "constructor"
	}
];

//var web3 = new Web3();

const web3 = new Web3(new Web3.providers.HttpProvider('http://10.11.100.101:8545'));


if(!web3.isConnected) {
   console.log('bad');
 } else {
   console.log('OK');
   //console.log(web3.eth.Contract(abi).at("0xc8bae99d386b213f3c0ed0654080842a466bd45f"));
   web3.eth.defaultAccount = "0x714A04fe6eC94f8DbeC3CF2a741f8e698D092878";
   var c = web3.eth.contract(abi).at("0x862ac05aed1b280eb58aa2b4e94a4a1b7ea5b095");
   c.pay();
   //console.log(c);
   //c.pay("0x00ae1858ea41f5667cda17c7915c2f289c4ee819");
   /*c.methods.pay().call({from: '0x1d18ce3a0678299a6a29a368993c23800ed43ec2'}, function(error, result){
            console.log(error);
            console.log(result);
    });*/
 }