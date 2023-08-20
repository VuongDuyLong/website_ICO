/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface FLPCrowdSaleInterface extends utils.Interface {
  functions: {
    "ETH_rate()": FunctionFragment;
    "USDT_rate()": FunctionFragment;
    "_wallet()": FunctionFragment;
    "buyTokenByETH()": FunctionFragment;
    "buyTokenByUSDT(uint256)": FunctionFragment;
    "getTokenAmountETH(uint256)": FunctionFragment;
    "getTokenAmountUSDT(uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setETHRate(uint256)": FunctionFragment;
    "setUSDTRate(uint256)": FunctionFragment;
    "setUSDTToken(address)": FunctionFragment;
    "token()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "usdtToken()": FunctionFragment;
    "withdraw()": FunctionFragment;
    "withdrawErc20()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "ETH_rate"
      | "USDT_rate"
      | "_wallet"
      | "buyTokenByETH"
      | "buyTokenByUSDT"
      | "getTokenAmountETH"
      | "getTokenAmountUSDT"
      | "owner"
      | "renounceOwnership"
      | "setETHRate"
      | "setUSDTRate"
      | "setUSDTToken"
      | "token"
      | "transferOwnership"
      | "usdtToken"
      | "withdraw"
      | "withdrawErc20"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "ETH_rate", values?: undefined): string;
  encodeFunctionData(functionFragment: "USDT_rate", values?: undefined): string;
  encodeFunctionData(functionFragment: "_wallet", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "buyTokenByETH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "buyTokenByUSDT",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenAmountETH",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenAmountUSDT",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setETHRate",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setUSDTRate",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setUSDTToken",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "usdtToken", values?: undefined): string;
  encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdrawErc20",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "ETH_rate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "USDT_rate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "_wallet", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "buyTokenByETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "buyTokenByUSDT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenAmountETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenAmountUSDT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setETHRate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setUSDTRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setUSDTToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "usdtToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawErc20",
    data: BytesLike
  ): Result;

  events: {
    "BuyTokenByETH(address,uint256)": EventFragment;
    "BuyTokenByUSDT(address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "SetETHRate(uint256)": EventFragment;
    "SetUSDTRate(uint256)": EventFragment;
    "SetUSDTToken(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BuyTokenByETH"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BuyTokenByUSDT"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetETHRate"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetUSDTRate"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetUSDTToken"): EventFragment;
}

export interface BuyTokenByETHEventObject {
  buyer: string;
  amount: BigNumber;
}
export type BuyTokenByETHEvent = TypedEvent<
  [string, BigNumber],
  BuyTokenByETHEventObject
>;

export type BuyTokenByETHEventFilter = TypedEventFilter<BuyTokenByETHEvent>;

export interface BuyTokenByUSDTEventObject {
  buyer: string;
  amount: BigNumber;
}
export type BuyTokenByUSDTEvent = TypedEvent<
  [string, BigNumber],
  BuyTokenByUSDTEventObject
>;

export type BuyTokenByUSDTEventFilter = TypedEventFilter<BuyTokenByUSDTEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface SetETHRateEventObject {
  newRate: BigNumber;
}
export type SetETHRateEvent = TypedEvent<[BigNumber], SetETHRateEventObject>;

export type SetETHRateEventFilter = TypedEventFilter<SetETHRateEvent>;

export interface SetUSDTRateEventObject {
  newRate: BigNumber;
}
export type SetUSDTRateEvent = TypedEvent<[BigNumber], SetUSDTRateEventObject>;

export type SetUSDTRateEventFilter = TypedEventFilter<SetUSDTRateEvent>;

export interface SetUSDTTokenEventObject {
  tokenAddress: string;
}
export type SetUSDTTokenEvent = TypedEvent<[string], SetUSDTTokenEventObject>;

export type SetUSDTTokenEventFilter = TypedEventFilter<SetUSDTTokenEvent>;

export interface FLPCrowdSale extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: FLPCrowdSaleInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    ETH_rate(overrides?: CallOverrides): Promise<[BigNumber]>;

    USDT_rate(overrides?: CallOverrides): Promise<[BigNumber]>;

    _wallet(overrides?: CallOverrides): Promise<[string]>;

    buyTokenByETH(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    buyTokenByUSDT(
      USDTAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getTokenAmountETH(
      ETHAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getTokenAmountUSDT(
      USDTAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setETHRate(
      new_rate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setUSDTRate(
      new_rate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setUSDTToken(
      token_address: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    token(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    usdtToken(overrides?: CallOverrides): Promise<[string]>;

    withdraw(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdrawErc20(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  ETH_rate(overrides?: CallOverrides): Promise<BigNumber>;

  USDT_rate(overrides?: CallOverrides): Promise<BigNumber>;

  _wallet(overrides?: CallOverrides): Promise<string>;

  buyTokenByETH(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  buyTokenByUSDT(
    USDTAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getTokenAmountETH(
    ETHAmount: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTokenAmountUSDT(
    USDTAmount: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setETHRate(
    new_rate: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setUSDTRate(
    new_rate: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setUSDTToken(
    token_address: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  token(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  usdtToken(overrides?: CallOverrides): Promise<string>;

  withdraw(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdrawErc20(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    ETH_rate(overrides?: CallOverrides): Promise<BigNumber>;

    USDT_rate(overrides?: CallOverrides): Promise<BigNumber>;

    _wallet(overrides?: CallOverrides): Promise<string>;

    buyTokenByETH(overrides?: CallOverrides): Promise<void>;

    buyTokenByUSDT(
      USDTAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getTokenAmountETH(
      ETHAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTokenAmountUSDT(
      USDTAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setETHRate(
      new_rate: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setUSDTRate(
      new_rate: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setUSDTToken(
      token_address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    token(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    usdtToken(overrides?: CallOverrides): Promise<string>;

    withdraw(overrides?: CallOverrides): Promise<void>;

    withdrawErc20(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "BuyTokenByETH(address,uint256)"(
      buyer?: null,
      amount?: null
    ): BuyTokenByETHEventFilter;
    BuyTokenByETH(buyer?: null, amount?: null): BuyTokenByETHEventFilter;

    "BuyTokenByUSDT(address,uint256)"(
      buyer?: null,
      amount?: null
    ): BuyTokenByUSDTEventFilter;
    BuyTokenByUSDT(buyer?: null, amount?: null): BuyTokenByUSDTEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "SetETHRate(uint256)"(newRate?: null): SetETHRateEventFilter;
    SetETHRate(newRate?: null): SetETHRateEventFilter;

    "SetUSDTRate(uint256)"(newRate?: null): SetUSDTRateEventFilter;
    SetUSDTRate(newRate?: null): SetUSDTRateEventFilter;

    "SetUSDTToken(address)"(tokenAddress?: null): SetUSDTTokenEventFilter;
    SetUSDTToken(tokenAddress?: null): SetUSDTTokenEventFilter;
  };

  estimateGas: {
    ETH_rate(overrides?: CallOverrides): Promise<BigNumber>;

    USDT_rate(overrides?: CallOverrides): Promise<BigNumber>;

    _wallet(overrides?: CallOverrides): Promise<BigNumber>;

    buyTokenByETH(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    buyTokenByUSDT(
      USDTAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getTokenAmountETH(
      ETHAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTokenAmountUSDT(
      USDTAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setETHRate(
      new_rate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setUSDTRate(
      new_rate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setUSDTToken(
      token_address: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    usdtToken(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdrawErc20(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ETH_rate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    USDT_rate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _wallet(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    buyTokenByETH(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    buyTokenByUSDT(
      USDTAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getTokenAmountETH(
      ETHAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTokenAmountUSDT(
      USDTAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setETHRate(
      new_rate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setUSDTRate(
      new_rate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setUSDTToken(
      token_address: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    usdtToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdrawErc20(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}