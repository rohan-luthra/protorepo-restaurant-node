// GENERATED CODE -- DO NOT EDIT!

// package: restaurant
// file: currency.proto

import * as currency_pb from "./currency_pb";
import * as basic_pb from "./basic_pb";
import * as grpc from "grpc";

interface ICurrencyServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  addCurrency: grpc.MethodDefinition<currency_pb.Currency, basic_pb.Id>;
  updateCurrency: grpc.MethodDefinition<currency_pb.Currency, basic_pb.Id>;
  removeCurrency: grpc.MethodDefinition<basic_pb.Id, basic_pb.Id>;
  getCurrencies: grpc.MethodDefinition<basic_pb.Empty, currency_pb.Currency>;
}

export const CurrencyServiceService: ICurrencyServiceService;

export class CurrencyServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  addCurrency(argument: currency_pb.Currency, callback: grpc.requestCallback<basic_pb.Id>): grpc.ClientUnaryCall;
  addCurrency(argument: currency_pb.Currency, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<basic_pb.Id>): grpc.ClientUnaryCall;
  addCurrency(argument: currency_pb.Currency, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<basic_pb.Id>): grpc.ClientUnaryCall;
  updateCurrency(argument: currency_pb.Currency, callback: grpc.requestCallback<basic_pb.Id>): grpc.ClientUnaryCall;
  updateCurrency(argument: currency_pb.Currency, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<basic_pb.Id>): grpc.ClientUnaryCall;
  updateCurrency(argument: currency_pb.Currency, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<basic_pb.Id>): grpc.ClientUnaryCall;
  removeCurrency(argument: basic_pb.Id, callback: grpc.requestCallback<basic_pb.Id>): grpc.ClientUnaryCall;
  removeCurrency(argument: basic_pb.Id, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<basic_pb.Id>): grpc.ClientUnaryCall;
  removeCurrency(argument: basic_pb.Id, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<basic_pb.Id>): grpc.ClientUnaryCall;
  getCurrencies(argument: basic_pb.Empty, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<currency_pb.Currency>;
  getCurrencies(argument: basic_pb.Empty, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<currency_pb.Currency>;
}
