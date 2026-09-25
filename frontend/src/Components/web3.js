
// // Assuming web3.js is installed and imported
// import Web3 from 'web3';

// // Initialization of web3 with the Ethereum provider
// let web3;
// if (window.ethereum) {
//     web3 = new Web3(window.ethereum);
//     try {
//         // Request account access if needed, this line is crucial for modern dApp browsers
//         await window.ethereum.request({ method: 'eth_requestAccounts' });
//     } catch (error) {
//         console.error("User denied account access");
//     }
// } else if (window.web3) {
//     // Legacy dapp browsers...
//     web3 = new Web3(window.web3.currentProvider);
// } else {
//     console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
// }

// // Revised mintNFT function with async/await
// const mintNFT = async (recipientAddress, tokenURI) => {
//     try {
//         const accounts = await web3.eth.getAccounts(); // Now this should work without error
//         const fromAccount = accounts[0];
//         const contractABI = [
// 			{
// 				"inputs": [
// 					{
// 						"internalType": "address",
// 						"name": "to",
// 						"type": "address"
// 					},
// 					{
// 						"internalType": "uint256",
// 						"name": "tokenId",
// 						"type": "uint256"
// 					}
// 				],
// 				"name": "approve",
// 				"outputs": [],
// 				"stateMutability": "nonpayable",
// 				"type": "function"
// 			},
// 			{
// 				"inputs": [],
// 				"stateMutability": "nonpayable",
// 				"type": "constructor"
// 			},
// 			{
// 				"inputs": [
// 					{
// 						"internalType": "address",
// 						"name": "sender",
// 						"type": "address"
// 					},
// 					{
// 						"internalType": "uint256",
// 						"name": "tokenId",
// 						"type": "uint256"
// 					},
// 					{
// 						"internalType": "address",
// 						"name": "owner",
// 						"type": "address"
// 					}
// 				],
// 				"name": "ERC721IncorrectOwner",
// 				"type": "error"
// 			},
// 			{
// 				"inputs": [
// 					{
// 						"internalType": "address",
// 						"name": "operator",
// 						"type": "address"
// 					},
// 					{
// 						"internalType": "uint256",
// 						"name": "tokenId",
// 						"type": "uint256"
// 					}
// 				],
// 				"name": "ERC721InsufficientApproval",
// 				"type": "error"
// 			},
// 			{
// 				"inputs": [
// 					{
// 						"internalType": "address",
// 						"name": "approver",
// 						"type": "address"
// 					}
// 				],
// 				"name": "ERC721InvalidApprover",
// 				"type": "error"
// 			},
// 			{
// 				"inputs": [
// 					{
// 						"internalType": "address",
// 						"name": "operator",
// 						"type": "address"
// 					}
// 				],
// 				"name": "ERC721InvalidOperator",
// 				"type": "error"
// 			},
// 			{
// 				"inputs": [
// 					{
// 						"internalType": "address",
// 						"name": "owner",
// 						"type": "address"
// 					}
// 				],
// 				"name": "ERC721InvalidOwner",
// 				"type": "error"
// 			},
// 			{
// 				"inputs": [
// 					{
// 						"internalType": "address",
// 						"name": "receiver",
// 						"type": "address"
// 					}
// 				],
// 				"name": "ERC721InvalidReceiver",
// 				"type": "error"
// 			},
// 			{
// 				"inputs": [
// 					{
// 						"internalType": "address",
// 						"name": "sender",
// 						"type": "address"
// 					}
// 				],
// 				"name": "ERC721InvalidSender",
// 				"type": "error"
// 			},
// 			{
// 				"inputs": [
// 					{
// 						"internalType": "uint256",
// 						"name": "tokenId",
// 						"type": "uint256"
// 					}
// 				],
// 				"name": "ERC721NonexistentToken",
// 				"type": "error"
// 			},
// 			{
// 				"anonymous": false,
// 				"inputs": [
// 					{
// 						"indexed": true,
// 						"internalType": "address",
// 						"name": "owner",
// 						"type": "address"
// 					},
// 					{
// 						"indexed": true,
// 						"internalType": "address",
// 						"name": "approved",
// 						"type": "address"
// 					},
// 					{
// 						"indexed": true,
// 						"internalType": "uint256",
// 						"name": "tokenId",
// 						"type": "uint256"
// 					}
// 				],
// 				"name": "Approval",
// 				"type": "event"
// 			},
// 			{
// 				"anonymous": false,
// 				"inputs": [
// 					{
// 						"indexed": true,
// 						"internalType": "address",
// 						"name": "owner",
// 						"type": "address"
// 					},
// 					{
// 						"indexed": true,
// 						"internalType": "address",
// 						"name": "operator",
// 						"type": "address"
// 					},
// 					{
// 						"indexed": false,
// 						"internalType": "bool",
// 						"name": "approved",
// 						"type": "bool"
// 					}
// 				],
// 				"name": "ApprovalForAll",
// 				"type": "event"
// 			},
// 			{
// 				"anonymous": false,
// 				"inputs": [
// 					{
// 						"indexed": false,
// 						"internalType": "uint256",
// 						"name": "_fromTokenId",
// 						"type": "uint256"
// 					},
// 					{
// 						"indexed": false,
// 						"internalType": "uint256",
// 						"name": "_toTokenId",
// 						"type": "uint256"
// 					}
// 				],
// 				"name": "BatchMetadataUpdate",
// 				"type": "event"
// 			},
// 			{
// 				"anonymous": false,
// 				"inputs": [
// 					{
// 						"indexed": false,
// 						"internalType": "uint256",
// 						"name": "_tokenId",
// 						"type": "uint256"
// 					}
// 				],
// 				"name": "MetadataUpdate",
// 				"type": "event"
// 			},
// 			{
// 				"inputs": [
// 					{
// 						"internalType": "address",
// 						"name": "recipient",
// 						"type": "address"
// 					},
// 					{
// 						"internalType": "string",
// 						"name": "tokenURI",
// 						"type": "string"
// 					}
// 				],
// 				"name": "mintNFT",
// 				"outputs": [
// 					{
// 						"internalType": "uint256",
// 						"name": "",
// 						"type": "uint256"
// 					}
// 				],
// 				"stateMutability": "nonpayable",
// 				"type": "function"
// 			},
// 			{
// 				"inputs": [
// 					{
// 						"internalType": "address",
// 						"name": "from",
// 						"type": "address"
// 					},
// 					{
// 						"internalType": "address",
// 						"name": "to",
// 						"type": "address"
// 					},
// 					{
// 						"internalType": "uint256",
// 						"name": "tokenId",
// 						"type": "uint256"
// 					}
// 				],
// 				"name": "safeTransferFrom",
// 				"outputs": [],
// 				"stateMutability": "nonpayable",
// 				"type": "function"
// 			},
// 			{
// 				"inputs": [
// 					{
// 						"internalType": "address",
// 						"name": "from",
// 						"type": "address"
// 					},
// 					{
// 						"internalType": "address",
// 						"name": "to",
// 						"type": "address"
// 					},
// 					{
// 						"internalType": "uint256",
// 						"name": "tokenId",
// 						"type": "uint256"
// 					},
// 					{
// 						"internalType": "bytes",
// 						"name": "data",
// 						"type": "bytes"
// 					}
// 				],
// 				"name": "safeTransferFrom",
// 				"outputs": [],
// 				"stateMutability": "nonpayable",
// 				"type": "function"
// 			},
// 			{
// 				"inputs": [
// 					{
// 						"internalType": "address",
// 						"name": "operator",
// 						"type": "address"
// 					},
// 					{
// 						"internalType": "bool",
// 						"name": "approved",
// 						"type": "bool"
// 					}
// 				],
// 				"name": "setApprovalForAll",
// 				"outputs": [],
// 				"stateMutability": "nonpayable",
// 				"type": "function"
// 			},
// 			{
// 				"anonymous": false,
// 				"inputs": [
// 					{
// 						"indexed": true,
// 						"internalType": "address",
// 						"name": "from",
// 						"type": "address"
// 					},
// 					{
// 						"indexed": true,
// 						"internalType": "address",
// 						"name": "to",
// 						"type": "address"
// 					},
// 					{
// 						"indexed": true,
// 						"internalType": "uint256",
// 						"name": "tokenId",
// 						"type": "uint256"
// 					}
// 				],
// 				"name": "Transfer",
// 				"type": "event"
// 			},
// 			{
// 				"inputs": [
// 					{
// 						"internalType": "address",
// 						"name": "from",
// 						"type": "address"
// 					},
// 					{
// 						"internalType": "address",
// 						"name": "to",
// 						"type": "address"
// 					},
// 					{
// 						"internalType": "uint256",
// 						"name": "tokenId",
// 						"type": "uint256"
// 					}
// 				],
// 				"name": "transferFrom",
// 				"outputs": [],
// 				"stateMutability": "nonpayable",
// 				"type": "function"
// 			},
// 			{
// 				"inputs": [
// 					{
// 						"internalType": "address",
// 						"name": "owner",
// 						"type": "address"
// 					}
// 				],
// 				"name": "balanceOf",
// 				"outputs": [
// 					{
// 						"internalType": "uint256",
// 						"name": "",
// 						"type": "uint256"
// 					}
// 				],
// 				"stateMutability": "view",
// 				"type": "function"
// 			},
// 			{
// 				"inputs": [
// 					{
// 						"internalType": "uint256",
// 						"name": "tokenId",
// 						"type": "uint256"
// 					}
// 				],
// 				"name": "getApproved",
// 				"outputs": [
// 					{
// 						"internalType": "address",
// 						"name": "",
// 						"type": "address"
// 					}
// 				],
// 				"stateMutability": "view",
// 				"type": "function"
// 			},
// 			{
// 				"inputs": [
// 					{
// 						"internalType": "address",
// 						"name": "owner",
// 						"type": "address"
// 					},
// 					{
// 						"internalType": "address",
// 						"name": "operator",
// 						"type": "address"
// 					}
// 				],
// 				"name": "isApprovedForAll",
// 				"outputs": [
// 					{
// 						"internalType": "bool",
// 						"name": "",
// 						"type": "bool"
// 					}
// 				],
// 				"stateMutability": "view",
// 				"type": "function"
// 			},
// 			{
// 				"inputs": [],
// 				"name": "name",
// 				"outputs": [
// 					{
// 						"internalType": "string",
// 						"name": "",
// 						"type": "string"
// 					}
// 				],
// 				"stateMutability": "view",
// 				"type": "function"
// 			},
// 			{
// 				"inputs": [
// 					{
// 						"internalType": "uint256",
// 						"name": "tokenId",
// 						"type": "uint256"
// 					}
// 				],
// 				"name": "ownerOf",
// 				"outputs": [
// 					{
// 						"internalType": "address",
// 						"name": "",
// 						"type": "address"
// 					}
// 				],
// 				"stateMutability": "view",
// 				"type": "function"
// 			},
// 			{
// 				"inputs": [
// 					{
// 						"internalType": "bytes4",
// 						"name": "interfaceId",
// 						"type": "bytes4"
// 					}
// 				],
// 				"name": "supportsInterface",
// 				"outputs": [
// 					{
// 						"internalType": "bool",
// 						"name": "",
// 						"type": "bool"
// 					}
// 				],
// 				"stateMutability": "view",
// 				"type": "function"
// 			},
// 			{
// 				"inputs": [],
// 				"name": "symbol",
// 				"outputs": [
// 					{
// 						"internalType": "string",
// 						"name": "",
// 						"type": "string"
// 					}
// 				],
// 				"stateMutability": "view",
// 				"type": "function"
// 			},
// 			{
// 				"inputs": [
// 					{
// 						"internalType": "uint256",
// 						"name": "tokenId",
// 						"type": "uint256"
// 					}
// 				],
// 				"name": "tokenURI",
// 				"outputs": [
// 					{
// 						"internalType": "string",
// 						"name": "",
// 						"type": "string"
// 					}
// 				],
// 				"stateMutability": "view",
// 				"type": "function"
// 			}
// 		]; // Your contract ABI here
//         const contractAddress = "0xd9145CCE52D386f254917e481eB44e9943F39138";
//         const myContract = new web3.eth.Contract(contractABI, contractAddress);
        
//         const receipt = await myContract.methods.mintNFT(recipientAddress, tokenURI).send({ from: fromAccount });
//         console.log('NFT Minted:', receipt);
//     } catch (error) {
//         console.error('Minting NFT failed:', error);
//     }
// };

// export default mintNFT;
