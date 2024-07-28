import User from '../model/user.js'
import { ApiPromise, WsProvider } from '@polkadot/api';
import { Keyring } from '@polkadot/keyring';
import { cryptoWaitReady } from '@polkadot/util-crypto';

export const createUser = async(newUser) =>{

    const user = new User(newUser);
    return user.save();

}

export const GetUser= async(id) =>{

    console.log(id);
    const meetingId = {username : id};
    const user = await User.findOne(meetingId);

    if (!user) {
        throw new Error('User not found');
    }

    const wsProvider = new WsProvider('wss://rpc.polkadot.io');
    const api = await ApiPromise.create({ provider: wsProvider });
    const { data: { free: balance } } = await api.query.system.account(user.address);

    console.log(`User: ${user.username}, Address: ${user.address}, Balance: ${balance.toString()}`);

    return {
        username: user.username,
        email: user.email,
        address: user.address,
        balance: balance.toString(), // Convert BigInt to string
    };

}