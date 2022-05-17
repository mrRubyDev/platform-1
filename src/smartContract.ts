import { keccak256 } from "@ethersproject/keccak256";
import { toUtf8Bytes } from "@ethersproject/strings";

export const ERC20Address = "0x1993e340B90eA07c9f646B60C0e9B5148253902e";
export const multiSigAddress = "0xA342A3106D77859C8d5100A5aDcE39F4159caaf4";

const ERC20Abi =
  [
    {
       "anonymous":false,
       "inputs":[
          {
             "indexed":true,
             "internalType":"address",
             "name":"owner",
             "type":"address"
          },
          {
             "indexed":true,
             "internalType":"address",
             "name":"spender",
             "type":"address"
          },
          {
             "indexed":false,
             "internalType":"uint256",
             "name":"value",
             "type":"uint256"
          }
       ],
       "name":"Approval",
       "type":"event"
    },
    {
       "anonymous":false,
       "inputs":[
          {
             "indexed":false,
             "internalType":"uint8",
             "name":"version",
             "type":"uint8"
          }
       ],
       "name":"Initialized",
       "type":"event"
    },
    {
       "anonymous":false,
       "inputs":[
          {
             "indexed":true,
             "internalType":"address",
             "name":"from",
             "type":"address"
          },
          {
             "indexed":true,
             "internalType":"address",
             "name":"to",
             "type":"address"
          },
          {
             "indexed":false,
             "internalType":"uint256",
             "name":"value",
             "type":"uint256"
          }
       ],
       "name":"Transfer",
       "type":"event"
    },
    {
       "inputs":[
          
       ],
       "name":"accountabilityAddress",
       "outputs":[
          {
             "internalType":"address",
             "name":"",
             "type":"address"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"owner",
             "type":"address"
          },
          {
             "internalType":"address",
             "name":"spender",
             "type":"address"
          }
       ],
       "name":"allowance",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"spender",
             "type":"address"
          },
          {
             "internalType":"uint256",
             "name":"amount",
             "type":"uint256"
          }
       ],
       "name":"approve",
       "outputs":[
          {
             "internalType":"bool",
             "name":"",
             "type":"bool"
          }
       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"account",
             "type":"address"
          }
       ],
       "name":"balanceOf",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"uint256",
             "name":"_amount",
             "type":"uint256"
          }
       ],
       "name":"burn",
       "outputs":[
          {
             "internalType":"bool",
             "name":"",
             "type":"bool"
          }
       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          
       ],
       "name":"decimals",
       "outputs":[
          {
             "internalType":"uint8",
             "name":"",
             "type":"uint8"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"spender",
             "type":"address"
          },
          {
             "internalType":"uint256",
             "name":"subtractedValue",
             "type":"uint256"
          }
       ],
       "name":"decreaseAllowance",
       "outputs":[
          {
             "internalType":"bool",
             "name":"",
             "type":"bool"
          }
       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"spender",
             "type":"address"
          },
          {
             "internalType":"uint256",
             "name":"addedValue",
             "type":"uint256"
          }
       ],
       "name":"increaseAllowance",
       "outputs":[
          {
             "internalType":"bool",
             "name":"",
             "type":"bool"
          }
       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"_accountabilityAddress",
             "type":"address"
          },
          {
             "internalType":"string",
             "name":"_name",
             "type":"string"
          },
          {
             "internalType":"string",
             "name":"_symbol",
             "type":"string"
          },
          {
             "internalType":"uint256",
             "name":"_decimals",
             "type":"uint256"
          }
       ],
       "name":"initialize",
       "outputs":[
          
       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"_to",
             "type":"address"
          },
          {
             "internalType":"uint256",
             "name":"_totalSupply",
             "type":"uint256"
          },
          {
             "internalType":"uint256",
             "name":"_decimals",
             "type":"uint256"
          }
       ],
       "name":"mint",
       "outputs":[
          {
             "internalType":"bool",
             "name":"",
             "type":"bool"
          }
       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[],
       "name":"name",
       "outputs":[
          {
             "internalType":"string",
             "name":"",
             "type":"string"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[],
       "name":"symbol",
       "outputs":[
          {
             "internalType":"string",
             "name":"",
             "type":"string"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[],
       "name":"totalSupply",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"to",
             "type":"address"
          },
          {
             "internalType":"uint256",
             "name":"amount",
             "type":"uint256"
          }
       ],
       "name":"transfer",
       "outputs":[
          {
             "internalType":"bool",
             "name":"",
             "type":"bool"
          }
       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"from",
             "type":"address"
          },
          {
             "internalType":"address",
             "name":"to",
             "type":"address"
          },
          {
             "internalType":"uint256",
             "name":"amount",
             "type":"uint256"
          }
       ],
       "name":"transferFrom",
       "outputs":[
          {
             "internalType":"bool",
             "name":"",
             "type":"bool"
          }
       ],
       "stateMutability":"nonpayable",
       "type":"function"
    }
 ]
// Rinkeby Testnet

// Pbl: 0xB6097b6932ad88D1159c10bA7D290ba05087507D
// Pvt: 0x05da23ac61f6033d09e69470b9b1f6afcc98214451b78164ee0017e474ebd75a

// Pbl: 0x7db3c4099660a6f33bBfF63B3318CBf9b4D07743
// Pvt: 0x9723825bcb901c7fa2bb209763eb12d02a2fa233f3b31bda1c9256c2c76507e5

// Pbl: 0x0a767592E4C4CbD5A65BAc08bd3c7112d68496A5
// Pvt: 0x9e5173918505a0917dbb5a2c40ecdeecb11fb48f88dc5a9e84a968174dc2910f

// Pbl: 0x3d6AD09Ed37447b963A7f5470bF6C0003D36dEe3
// Pvt: 0xc41927c6c49d5e09b0b6b93be73f1420ed6b381614fbb824f37af79fe78480cd

// Owner

// Pbl: 0xDc3A186fB898669023289Fd66b68E4016875E011
// Pvt: 0x17793bb885773856ac0a6f534f9484e74c1164bd545659b95419c430bbba5904

const getTopicHash = (string: string) => keccak256(toUtf8Bytes(string));

export const ERC20Options = (address: string, functionName: string, args?: any) => {
	const params = {...args, _address: address}
	return {
      chain: process.env.REACT_APP_CHAIN,
      contractAddress: ERC20Address,
      functionName: functionName,
      abi: ERC20Abi,
      params, 
  }
};

export const multiSigEventsOptions = ( name: string ) => {
	const abi = ERC20Abi.filter(abi => abi.name === name)[0];
	const inputs = abi.inputs.map(a => a.internalType).join(",");
	const topic = getTopicHash(`${name}(${inputs})`);
	return {
		chain: process.env.REACT_APP_CHAIN,
      address: ERC20Address,
      abi,
		topic,
		limit: '3',
  }
};



//Add here the functions or events we want to use
const TOTAL_SUPPLY = 'totalSupply';
const GET_BALANCE = 'balanceOf'

const SMART_CONTRACT_FUNCTIONS = {
  // Functions:
  TOTAL_SUPPLY,
  GET_BALANCE,
  // Events:
}

export default SMART_CONTRACT_FUNCTIONS;
