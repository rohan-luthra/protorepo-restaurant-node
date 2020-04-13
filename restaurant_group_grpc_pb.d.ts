// GENERATED CODE -- DO NOT EDIT!

// package: restaurant
// file: restaurant_group.proto

import * as restaurant_group_pb from "./restaurant_group_pb";
import * as basic_pb from "./basic_pb";
import * as restaurant_pb from "./restaurant_pb";
import * as grpc from "grpc";

interface IRestaurantGroupServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  addRestaurantGroup: grpc.MethodDefinition<restaurant_group_pb.RestaurantGroup, basic_pb.Id>;
  updateRestaurantGroup: grpc.MethodDefinition<restaurant_group_pb.RestaurantGroup, basic_pb.Id>;
  getRestaurantGroup: grpc.MethodDefinition<basic_pb.Id, restaurant_group_pb.RestaurantGroup>;
  getRestaurantGroups: grpc.MethodDefinition<basic_pb.Empty, restaurant_group_pb.RestaurantGroup>;
  getRestaurantGroupRestaurant: grpc.MethodDefinition<basic_pb.Id, restaurant_pb.Restaurant>;
}

export const RestaurantGroupServiceService: IRestaurantGroupServiceService;

export class RestaurantGroupServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  addRestaurantGroup(argument: restaurant_group_pb.RestaurantGroup, callback: grpc.requestCallback<basic_pb.Id>): grpc.ClientUnaryCall;
  addRestaurantGroup(argument: restaurant_group_pb.RestaurantGroup, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<basic_pb.Id>): grpc.ClientUnaryCall;
  addRestaurantGroup(argument: restaurant_group_pb.RestaurantGroup, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<basic_pb.Id>): grpc.ClientUnaryCall;
  updateRestaurantGroup(argument: restaurant_group_pb.RestaurantGroup, callback: grpc.requestCallback<basic_pb.Id>): grpc.ClientUnaryCall;
  updateRestaurantGroup(argument: restaurant_group_pb.RestaurantGroup, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<basic_pb.Id>): grpc.ClientUnaryCall;
  updateRestaurantGroup(argument: restaurant_group_pb.RestaurantGroup, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<basic_pb.Id>): grpc.ClientUnaryCall;
  getRestaurantGroup(argument: basic_pb.Id, callback: grpc.requestCallback<restaurant_group_pb.RestaurantGroup>): grpc.ClientUnaryCall;
  getRestaurantGroup(argument: basic_pb.Id, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<restaurant_group_pb.RestaurantGroup>): grpc.ClientUnaryCall;
  getRestaurantGroup(argument: basic_pb.Id, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<restaurant_group_pb.RestaurantGroup>): grpc.ClientUnaryCall;
  getRestaurantGroups(argument: basic_pb.Empty, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<restaurant_group_pb.RestaurantGroup>;
  getRestaurantGroups(argument: basic_pb.Empty, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<restaurant_group_pb.RestaurantGroup>;
  getRestaurantGroupRestaurant(argument: basic_pb.Id, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<restaurant_pb.Restaurant>;
  getRestaurantGroupRestaurant(argument: basic_pb.Id, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<restaurant_pb.Restaurant>;
}
