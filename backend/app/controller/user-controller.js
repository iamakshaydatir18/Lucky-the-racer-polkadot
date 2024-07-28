import { setError, setResponse } from "./handle-response.js";
import { createUser , GetUser } from '../services/user-services.js';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { Keyring } from '@polkadot/keyring';
import { cryptoWaitReady } from '@polkadot/util-crypto';

//Add Notes controller
export const createUserController = async(request,response)=>{
    console.log("from create users!!");
       try{
           const body = {...request.body};
           
           await cryptoWaitReady();
           const keyring = new Keyring({ type: 'sr25519' });
           const newPair = keyring.addFromUri(body.username); // Example wallet
           console.log(`New wallet address: ${newPair.address}`);
           const user = {
                username : body.username,
                email : body.email,
                address: newPair.address,
                balance: 0,
            };
    
           const responseData = await createUser(user);
           console.log(`Created user: ${responseData.username} with address: ${responseData.address}`);
           setResponse(responseData,response); 
       }catch(error){
           setError(error,response);
       }
   }
   
   //Find notes controller using IDs
   export const findUserController = async(request,response)=>{
       
    console.log("from find!!");
       try{
           const responseData = await GetUser(request.params.id);

           console.log(responseData);

           if (!responseData) {
                throw new Error('User not found');
            }

            //const wsProvider = new WsProvider('wss://rpc.polkadot.io');
            //const api = await ApiPromise.create({ provider: wsProvider });
            //const { data: { free: balance } } = await api.query.system.account(user.address);
           // console.log(`User: ${user.username}, Address: ${user.address}, Balance: ${balance}`);

           setResponse(responseData,response); 
       }catch(error){
           setError(error,response);
       }
   }