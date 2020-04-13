// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var restaurant_group_pb = require('./restaurant_group_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var basic_pb = require('./basic_pb.js');
var restaurant_pb = require('./restaurant_pb.js');

function serialize_restaurant_Empty(arg) {
  if (!(arg instanceof basic_pb.Empty)) {
    throw new Error('Expected argument of type restaurant.Empty');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_restaurant_Empty(buffer_arg) {
  return basic_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_restaurant_Id(arg) {
  if (!(arg instanceof basic_pb.Id)) {
    throw new Error('Expected argument of type restaurant.Id');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_restaurant_Id(buffer_arg) {
  return basic_pb.Id.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_restaurant_Restaurant(arg) {
  if (!(arg instanceof restaurant_pb.Restaurant)) {
    throw new Error('Expected argument of type restaurant.Restaurant');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_restaurant_Restaurant(buffer_arg) {
  return restaurant_pb.Restaurant.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_restaurant_RestaurantGroup(arg) {
  if (!(arg instanceof restaurant_group_pb.RestaurantGroup)) {
    throw new Error('Expected argument of type restaurant.RestaurantGroup');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_restaurant_RestaurantGroup(buffer_arg) {
  return restaurant_group_pb.RestaurantGroup.deserializeBinary(new Uint8Array(buffer_arg));
}


var RestaurantGroupServiceService = exports.RestaurantGroupServiceService = {
  // *
  // Add new RestaurantGroup
  // @required: salesJwt/adminJWT
  addRestaurantGroup: {
    path: '/restaurant.RestaurantGroupService/AddRestaurantGroup',
    requestStream: false,
    responseStream: false,
    requestType: restaurant_group_pb.RestaurantGroup,
    responseType: basic_pb.Id,
    requestSerialize: serialize_restaurant_RestaurantGroup,
    requestDeserialize: deserialize_restaurant_RestaurantGroup,
    responseSerialize: serialize_restaurant_Id,
    responseDeserialize: deserialize_restaurant_Id,
  },
  // *
  // Update a RestaurantGroup
  // @required: restGroupJWT/salesJwt
  updateRestaurantGroup: {
    path: '/restaurant.RestaurantGroupService/UpdateRestaurantGroup',
    requestStream: false,
    responseStream: false,
    requestType: restaurant_group_pb.RestaurantGroup,
    responseType: basic_pb.Id,
    requestSerialize: serialize_restaurant_RestaurantGroup,
    requestDeserialize: deserialize_restaurant_RestaurantGroup,
    responseSerialize: serialize_restaurant_Id,
    responseDeserialize: deserialize_restaurant_Id,
  },
  // *
  // Get RestaurantGroup
  // @required: restGroupJWT/salesJwt/opsJWT/supportJwt/adminJWT
  getRestaurantGroup: {
    path: '/restaurant.RestaurantGroupService/GetRestaurantGroup',
    requestStream: false,
    responseStream: false,
    requestType: basic_pb.Id,
    responseType: restaurant_group_pb.RestaurantGroup,
    requestSerialize: serialize_restaurant_Id,
    requestDeserialize: deserialize_restaurant_Id,
    responseSerialize: serialize_restaurant_RestaurantGroup,
    responseDeserialize: deserialize_restaurant_RestaurantGroup,
  },
  // *
  // Get all RestaurantGroup
  // @required: restGroupJWT/salesJwt/opsJWT/supportJwt/adminJWT
  getRestaurantGroups: {
    path: '/restaurant.RestaurantGroupService/GetRestaurantGroups',
    requestStream: false,
    responseStream: true,
    requestType: basic_pb.Empty,
    responseType: restaurant_group_pb.RestaurantGroup,
    requestSerialize: serialize_restaurant_Empty,
    requestDeserialize: deserialize_restaurant_Empty,
    responseSerialize: serialize_restaurant_RestaurantGroup,
    responseDeserialize: deserialize_restaurant_RestaurantGroup,
  },
  // *
  // Get all Restaurant for RestaurantGroup
  // @required: restGroupJWT/salesJwt/opsJWT/supportJwt/adminJWT
  getRestaurantGroupRestaurant: {
    path: '/restaurant.RestaurantGroupService/GetRestaurantGroupRestaurant',
    requestStream: false,
    responseStream: true,
    requestType: basic_pb.Id,
    responseType: restaurant_pb.Restaurant,
    requestSerialize: serialize_restaurant_Id,
    requestDeserialize: deserialize_restaurant_Id,
    responseSerialize: serialize_restaurant_Restaurant,
    responseDeserialize: deserialize_restaurant_Restaurant,
  },
};

exports.RestaurantGroupServiceClient = grpc.makeGenericClientConstructor(RestaurantGroupServiceService);
