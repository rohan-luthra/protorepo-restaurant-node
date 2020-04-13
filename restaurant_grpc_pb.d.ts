// GENERATED CODE -- DO NOT EDIT!

// package: restaurant
// file: restaurant.proto

import * as restaurant_pb from "./restaurant_pb";
import * as basic_pb from "./basic_pb";
import * as grpc from "grpc";

interface IRestaurantServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  addRestaurant: grpc.MethodDefinition<restaurant_pb.Restaurant, basic_pb.Id>;
  getRestaurant: grpc.MethodDefinition<basic_pb.Id, restaurant_pb.Restaurant>;
  getRestaurants: grpc.MethodDefinition<basic_pb.Empty, restaurant_pb.Restaurant>;
  updateRestaurant: grpc.MethodDefinition<restaurant_pb.Restaurant, basic_pb.Id>;
  deleteRestaurant: grpc.MethodDefinition<basic_pb.Id, basic_pb.Id>;
}

export const RestaurantServiceService: IRestaurantServiceService;

export class RestaurantServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  addRestaurant(argument: restaurant_pb.Restaurant, callback: grpc.requestCallback<basic_pb.Id>): grpc.ClientUnaryCall;
  addRestaurant(argument: restaurant_pb.Restaurant, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<basic_pb.Id>): grpc.ClientUnaryCall;
  addRestaurant(argument: restaurant_pb.Restaurant, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<basic_pb.Id>): grpc.ClientUnaryCall;
  getRestaurant(argument: basic_pb.Id, callback: grpc.requestCallback<restaurant_pb.Restaurant>): grpc.ClientUnaryCall;
  getRestaurant(argument: basic_pb.Id, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<restaurant_pb.Restaurant>): grpc.ClientUnaryCall;
  getRestaurant(argument: basic_pb.Id, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<restaurant_pb.Restaurant>): grpc.ClientUnaryCall;
  getRestaurants(argument: basic_pb.Empty, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<restaurant_pb.Restaurant>;
  getRestaurants(argument: basic_pb.Empty, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<restaurant_pb.Restaurant>;
  updateRestaurant(argument: restaurant_pb.Restaurant, callback: grpc.requestCallback<basic_pb.Id>): grpc.ClientUnaryCall;
  updateRestaurant(argument: restaurant_pb.Restaurant, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<basic_pb.Id>): grpc.ClientUnaryCall;
  updateRestaurant(argument: restaurant_pb.Restaurant, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<basic_pb.Id>): grpc.ClientUnaryCall;
  deleteRestaurant(argument: basic_pb.Id, callback: grpc.requestCallback<basic_pb.Id>): grpc.ClientUnaryCall;
  deleteRestaurant(argument: basic_pb.Id, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<basic_pb.Id>): grpc.ClientUnaryCall;
  deleteRestaurant(argument: basic_pb.Id, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<basic_pb.Id>): grpc.ClientUnaryCall;
}
