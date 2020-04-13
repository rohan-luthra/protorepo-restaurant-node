// GENERATED CODE -- DO NOT EDIT!

// package: restaurant
// file: tax.proto

import * as tax_pb from "./tax_pb";
import * as basic_pb from "./basic_pb";
import * as grpc from "grpc";

interface ITaxServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  addTax: grpc.MethodDefinition<tax_pb.Tax, basic_pb.Id>;
  updateTax: grpc.MethodDefinition<tax_pb.Tax, tax_pb.Tax>;
  getTax: grpc.MethodDefinition<basic_pb.TaxId, tax_pb.Tax>;
  getRestTax: grpc.MethodDefinition<basic_pb.RestId, tax_pb.Tax>;
  deleteTax: grpc.MethodDefinition<basic_pb.Id, basic_pb.TaxId>;
}

export const TaxServiceService: ITaxServiceService;

export class TaxServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  addTax(argument: tax_pb.Tax, callback: grpc.requestCallback<basic_pb.Id>): grpc.ClientUnaryCall;
  addTax(argument: tax_pb.Tax, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<basic_pb.Id>): grpc.ClientUnaryCall;
  addTax(argument: tax_pb.Tax, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<basic_pb.Id>): grpc.ClientUnaryCall;
  updateTax(argument: tax_pb.Tax, callback: grpc.requestCallback<tax_pb.Tax>): grpc.ClientUnaryCall;
  updateTax(argument: tax_pb.Tax, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<tax_pb.Tax>): grpc.ClientUnaryCall;
  updateTax(argument: tax_pb.Tax, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<tax_pb.Tax>): grpc.ClientUnaryCall;
  getTax(argument: basic_pb.TaxId, callback: grpc.requestCallback<tax_pb.Tax>): grpc.ClientUnaryCall;
  getTax(argument: basic_pb.TaxId, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<tax_pb.Tax>): grpc.ClientUnaryCall;
  getTax(argument: basic_pb.TaxId, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<tax_pb.Tax>): grpc.ClientUnaryCall;
  getRestTax(argument: basic_pb.RestId, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<tax_pb.Tax>;
  getRestTax(argument: basic_pb.RestId, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<tax_pb.Tax>;
  deleteTax(argument: basic_pb.Id, callback: grpc.requestCallback<basic_pb.TaxId>): grpc.ClientUnaryCall;
  deleteTax(argument: basic_pb.Id, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<basic_pb.TaxId>): grpc.ClientUnaryCall;
  deleteTax(argument: basic_pb.Id, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<basic_pb.TaxId>): grpc.ClientUnaryCall;
}
