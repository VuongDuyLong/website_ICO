/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  FLPCrowdSale,
  FLPCrowdSaleInterface,
} from "../../../contracts/FLPCrowdsale.sol/FLPCrowdSale";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "eth_rate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "usdt_rate",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "wallet",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "icotoken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "BuyTokenByETH",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "BuyTokenByUSDT",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newRate",
        type: "uint256",
      },
    ],
    name: "SetETHRate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newRate",
        type: "uint256",
      },
    ],
    name: "SetUSDTRate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IERC20",
        name: "tokenAddress",
        type: "address",
      },
    ],
    name: "SetUSDTToken",
    type: "event",
  },
  {
    inputs: [],
    name: "ETH_rate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "USDT_rate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_wallet",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "buyTokenByETH",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "USDTAmount",
        type: "uint256",
      },
    ],
    name: "buyTokenByUSDT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "ETHAmount",
        type: "uint256",
      },
    ],
    name: "getTokenAmountETH",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "USDTAmount",
        type: "uint256",
      },
    ],
    name: "getTokenAmountUSDT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "new_rate",
        type: "uint256",
      },
    ],
    name: "setETHRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "new_rate",
        type: "uint256",
      },
    ],
    name: "setUSDTRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token_address",
        type: "address",
      },
    ],
    name: "setUSDTToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "usdtToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawErc20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001d9038038062001d908339818101604052810190620000379190620002bb565b620000576200004b620000f160201b60201c565b620000f960201b60201c565b836002819055508260038190555081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050506200032d565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080fd5b6000819050919050565b620001d781620001c2565b8114620001e357600080fd5b50565b600081519050620001f781620001cc565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200022a82620001fd565b9050919050565b6200023c816200021d565b81146200024857600080fd5b50565b6000815190506200025c8162000231565b92915050565b60006200026f82620001fd565b9050919050565b6000620002838262000262565b9050919050565b620002958162000276565b8114620002a157600080fd5b50565b600081519050620002b5816200028a565b92915050565b60008060008060808587031215620002d857620002d7620001bd565b5b6000620002e887828801620001e6565b9450506020620002fb87828801620001e6565b93505060406200030e878288016200024b565b92505060606200032187828801620002a4565b91505092959194509250565b611a53806200033d6000396000f3fe6080604052600436106100fe5760003560e01c8063715018a611610095578063a98ad46c11610064578063a98ad46c146102b6578063c5d15651146102e1578063e1e851891461030a578063f2fde38b14610347578063fc0c546a14610370576100fe565b8063715018a61461023f5780638909a40f146102565780638da5cb5b146102605780639cb7b9fc1461028b576100fe565b80634bfe2779116100d15780634bfe277914610197578063592a00e4146101c0578063610757e4146101eb57806366e226bd14610216576100fe565b80631832d8b6146101035780631b4622d6146101405780633ccfd60b146101695780633e3f235914610180575b600080fd5b34801561010f57600080fd5b5061012a60048036038101906101259190611202565b61039b565b604051610137919061123e565b60405180910390f35b34801561014c57600080fd5b5061016760048036038101906101629190611202565b6103b2565b005b34801561017557600080fd5b5061017e6103fb565b005b34801561018c57600080fd5b5061019561044c565b005b3480156101a357600080fd5b506101be60048036038101906101b99190611202565b610592565b005b3480156101cc57600080fd5b506101d56105db565b6040516101e2919061123e565b60405180910390f35b3480156101f757600080fd5b506102006105e1565b60405161020d919061129a565b60405180910390f35b34801561022257600080fd5b5061023d60048036038101906102389190611305565b610607565b005b34801561024b57600080fd5b5061025461068a565b005b61025e61069e565b005b34801561026c57600080fd5b506102756108fe565b6040516102829190611341565b60405180910390f35b34801561029757600080fd5b506102a0610927565b6040516102ad919061123e565b60405180910390f35b3480156102c257600080fd5b506102cb61092d565b6040516102d891906113bb565b60405180910390f35b3480156102ed57600080fd5b5061030860048036038101906103039190611202565b610953565b005b34801561031657600080fd5b50610331600480360381019061032c9190611202565b610c19565b60405161033e919061123e565b60405180910390f35b34801561035357600080fd5b5061036e60048036038101906103699190611402565b610c30565b005b34801561037c57600080fd5b50610385610cb3565b60405161039291906113bb565b60405180910390f35b6000600354826103ab919061145e565b9050919050565b6103ba610cd9565b806003819055507fbdaa37e3f6679857d8c3e80d172bd45af732a8658cf1d690c81ca96f5a443b5b816040516103f0919061123e565b60405180910390a150565b610403610cd9565b3373ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f19350505050158015610449573d6000803e3d6000fd5b50565b610454610cd9565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016104ee9190611341565b602060405180830381865afa15801561050b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061052f91906114b5565b6040518363ffffffff1660e01b815260040161054c9291906114e2565b6020604051808303816000875af115801561056b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061058f9190611543565b50565b61059a610cd9565b806002819055507fd6f234ccd3d6bc89db22f04e915efd024c0f4bddfaa8393e570fff7e3e3dec97816040516105d0919061123e565b60405180910390a150565b60035481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61060f610cd9565b80600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f43036333e58a6f9255617b54ec9f5825590c8ee695a222dc35e5001927f071518160405161067f91906113bb565b60405180910390a150565b610692610cd9565b61069c6000610d57565b565b600034905060006106ae82610c19565b9050600081116106f3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106ea906115cd565b60405180910390fd5b80600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161074f9190611341565b602060405180830381865afa15801561076c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061079091906114b5565b10156107d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107c890611639565b60405180910390fd5b813373ffffffffffffffffffffffffffffffffffffffff1631101561082b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082290611639565b60405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f19350505050158015610893573d6000803e3d6000fd5b506108c1600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff163383610e1b565b7fbab06efe910ba7896db8b04299fef8209e3d94545ac7115a3d064449381337bc33826040516108f29291906114e2565b60405180910390a15050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60025481565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600061095e8261039b565b905080600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016109bc9190611341565b602060405180830381865afa1580156109d9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109fd91906114b5565b1015610a3e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a3590611639565b60405180910390fd5b60008111610a81576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a78906115cd565b60405180910390fd5b80600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610add9190611341565b602060405180830381865afa158015610afa573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b1e91906114b5565b1015610b5f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b5690611639565b60405180910390fd5b610baf600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1633600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1685610ea1565b610bdc600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff163383610e1b565b7f5c0161fad3fa89cfebd4a74115d9f81661cdd1b9008d05a238ea9d65088e20643382604051610c0d9291906114e2565b60405180910390a15050565b600060025482610c29919061145e565b9050919050565b610c38610cd9565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610ca7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c9e906116cb565b60405180910390fd5b610cb081610d57565b50565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610ce1610f2a565b73ffffffffffffffffffffffffffffffffffffffff16610cff6108fe565b73ffffffffffffffffffffffffffffffffffffffff1614610d55576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d4c90611737565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b610e9c8363a9059cbb60e01b8484604051602401610e3a9291906114e2565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610f32565b505050565b610f24846323b872dd60e01b858585604051602401610ec293929190611757565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610f32565b50505050565b600033905090565b6000610f94826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16610ffa9092919063ffffffff16565b9050600081511480610fb6575080806020019051810190610fb59190611543565b5b610ff5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fec90611800565b60405180910390fd5b505050565b60606110098484600085611012565b90509392505050565b606082471015611057576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161104e90611892565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516110809190611923565b60006040518083038185875af1925050503d80600081146110bd576040519150601f19603f3d011682016040523d82523d6000602084013e6110c2565b606091505b50915091506110d3878383876110df565b92505050949350505050565b60608315611141576000835103611139576110f985611154565b611138576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161112f90611986565b60405180910390fd5b5b82905061114c565b61114b8383611177565b5b949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60008251111561118a5781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111be91906119fb565b60405180910390fd5b600080fd5b6000819050919050565b6111df816111cc565b81146111ea57600080fd5b50565b6000813590506111fc816111d6565b92915050565b600060208284031215611218576112176111c7565b5b6000611226848285016111ed565b91505092915050565b611238816111cc565b82525050565b6000602082019050611253600083018461122f565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061128482611259565b9050919050565b61129481611279565b82525050565b60006020820190506112af600083018461128b565b92915050565b60006112c082611259565b9050919050565b60006112d2826112b5565b9050919050565b6112e2816112c7565b81146112ed57600080fd5b50565b6000813590506112ff816112d9565b92915050565b60006020828403121561131b5761131a6111c7565b5b6000611329848285016112f0565b91505092915050565b61133b816112b5565b82525050565b60006020820190506113566000830184611332565b92915050565b6000819050919050565b600061138161137c61137784611259565b61135c565b611259565b9050919050565b600061139382611366565b9050919050565b60006113a582611388565b9050919050565b6113b58161139a565b82525050565b60006020820190506113d060008301846113ac565b92915050565b6113df816112b5565b81146113ea57600080fd5b50565b6000813590506113fc816113d6565b92915050565b600060208284031215611418576114176111c7565b5b6000611426848285016113ed565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611469826111cc565b9150611474836111cc565b9250828202611482816111cc565b915082820484148315176114995761149861142f565b5b5092915050565b6000815190506114af816111d6565b92915050565b6000602082840312156114cb576114ca6111c7565b5b60006114d9848285016114a0565b91505092915050565b60006040820190506114f76000830185611332565b611504602083018461122f565b9392505050565b60008115159050919050565b6115208161150b565b811461152b57600080fd5b50565b60008151905061153d81611517565b92915050565b600060208284031215611559576115586111c7565b5b60006115678482850161152e565b91505092915050565b600082825260208201905092915050565b7f416d6f756e74206973207a65726f000000000000000000000000000000000000600082015250565b60006115b7600e83611570565b91506115c282611581565b602082019050919050565b600060208201905081810360008301526115e6816115aa565b9050919050565b7f496e73756666696369656e74206163636f756e742062616c616e636500000000600082015250565b6000611623601c83611570565b915061162e826115ed565b602082019050919050565b6000602082019050818103600083015261165281611616565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006116b5602683611570565b91506116c082611659565b604082019050919050565b600060208201905081810360008301526116e4816116a8565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000611721602083611570565b915061172c826116eb565b602082019050919050565b6000602082019050818103600083015261175081611714565b9050919050565b600060608201905061176c6000830186611332565b6117796020830185611332565b611786604083018461122f565b949350505050565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b60006117ea602a83611570565b91506117f58261178e565b604082019050919050565b60006020820190508181036000830152611819816117dd565b9050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b600061187c602683611570565b915061188782611820565b604082019050919050565b600060208201905081810360008301526118ab8161186f565b9050919050565b600081519050919050565b600081905092915050565b60005b838110156118e65780820151818401526020810190506118cb565b60008484015250505050565b60006118fd826118b2565b61190781856118bd565b93506119178185602086016118c8565b80840191505092915050565b600061192f82846118f2565b915081905092915050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b6000611970601d83611570565b915061197b8261193a565b602082019050919050565b6000602082019050818103600083015261199f81611963565b9050919050565b600081519050919050565b6000601f19601f8301169050919050565b60006119cd826119a6565b6119d78185611570565b93506119e78185602086016118c8565b6119f0816119b1565b840191505092915050565b60006020820190508181036000830152611a1581846119c2565b90509291505056fea2646970667358221220b8885af8c20b340a6d0c562e585ce89e6d625217d7362223c4b1588561de107464736f6c63430008120033";

type FLPCrowdSaleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FLPCrowdSaleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FLPCrowdSale__factory extends ContractFactory {
  constructor(...args: FLPCrowdSaleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    eth_rate: PromiseOrValue<BigNumberish>,
    usdt_rate: PromiseOrValue<BigNumberish>,
    wallet: PromiseOrValue<string>,
    icotoken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FLPCrowdSale> {
    return super.deploy(
      eth_rate,
      usdt_rate,
      wallet,
      icotoken,
      overrides || {}
    ) as Promise<FLPCrowdSale>;
  }
  override getDeployTransaction(
    eth_rate: PromiseOrValue<BigNumberish>,
    usdt_rate: PromiseOrValue<BigNumberish>,
    wallet: PromiseOrValue<string>,
    icotoken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      eth_rate,
      usdt_rate,
      wallet,
      icotoken,
      overrides || {}
    );
  }
  override attach(address: string): FLPCrowdSale {
    return super.attach(address) as FLPCrowdSale;
  }
  override connect(signer: Signer): FLPCrowdSale__factory {
    return super.connect(signer) as FLPCrowdSale__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FLPCrowdSaleInterface {
    return new utils.Interface(_abi) as FLPCrowdSaleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FLPCrowdSale {
    return new Contract(address, _abi, signerOrProvider) as FLPCrowdSale;
  }
}