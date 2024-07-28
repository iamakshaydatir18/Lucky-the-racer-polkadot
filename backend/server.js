import dotenv from'dotenv';
import express from 'express';
import { initialise } from './app/app.js';

//initialisize environment variable 
dotenv.config();

// Creation of express app.
const app = express();

//Assigning a port 4000
const port = process.env.PORT;
initialise(app);

//Display Ports
app.listen(port, ()=> console.log(`Server running on port ${port}`));

// import { ApiPromise, WsProvider } from '@polkadot/api';
// import { Keyring } from '@polkadot/keyring';
// import { cryptoWaitReady } from '@polkadot/util-crypto';

// async function createWallet() {
//     const keyring = new Keyring({ type: 'sr25519' });
//     const newPair = keyring.addFromUri('//Alice'); // Example wallet
//     console.log(`New wallet address: ${newPair.address}`);
//     return newPair;
// }

// async function makeTransaction(api, sender, recipientAddress, amount) {
//     // Check if the balances module is available
//     if (!api.tx.balances) {
//         throw new Error('Balances module is not available on the connected node.');
//     }

//     console.log('Available functions in balances module:', Object.keys(api.tx.balances));

//     // Use transferKeepAlive instead of transfer
//     const transfer = api.tx.balances.transferKeepAlive(recipientAddress, amount);

//     const hash = await transfer.signAndSend(sender);
//     console.log('Transfer sent with hash', hash.toHex());
// }

// async function checkBalance(api, address) {
//     const { data: { free: balance } } = await api.query.system.account(address);
//     console.log(`Balance of ${address}: ${balance}`);
//     return balance;
// }


// async function main() {
//     await cryptoWaitReady(); // Ensure WASM interface is initialized

//     const wsProvider = new WsProvider('wss://rpc.polkadot.io');
//     const api = await ApiPromise.create({ provider: wsProvider });

//     console.log('Connected to Polkadot network');

//     // Print available modules
//     console.log('Available modules:', Object.keys(api.tx));

//     const alice = await createWallet();
//     const bob = await createWallet();

//     console.log('Checking balances before transaction...');
//     await checkBalance(api, alice.address);
//     await checkBalance(api, bob.address);

//    // await makeTransaction(api, alice, bob.address, 1); // Amount is in the smallest unit
// }

// main().catch(console.error);



