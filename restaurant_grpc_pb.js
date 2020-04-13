// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var restaurant_pb = require('./restaurant_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var basic_pb = require('./basic_pb.js');
var currency_pb = require('./currency_pb.js');

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


//
// Restaurant Service
//
var RestaurantServiceService = exports.RestaurantServiceService = {
  // *
  // Add new Restaurant
  // @required: salesJwt
  addRestaurant: {
    path: '/restaurant.RestaurantService/AddRestaurant',
    requestStream: false,
    responseStream: false,
    requestType: restaurant_pb.Restaurant,
    responseType: basic_pb.Id,
    requestSerialize: serialize_restaurant_Restaurant,
    requestDeserialize: deserialize_restaurant_Restaurant,
    responseSerialize: serialize_restaurant_Id,
    responseDeserialize: deserialize_restaurant_Id,
  },
  // *
  // Get a Restaurant 
  getRestaurant: {
    path: '/restaurant.RestaurantService/GetRestaurant',
    requestStream: false,
    responseStream: false,
    requestType: basic_pb.Id,
    responseType: restaurant_pb.Restaurant,
    requestSerialize: serialize_restaurant_Id,
    requestDeserialize: deserialize_restaurant_Id,
    responseSerialize: serialize_restaurant_Restaurant,
    responseDeserialize: deserialize_restaurant_Restaurant,
  },
  // *
  // Get all Restaurant 
  getRestaurants: {
    path: '/restaurant.RestaurantService/GetRestaurants',
    requestStream: false,
    responseStream: true,
    requestType: basic_pb.Empty,
    responseType: restaurant_pb.Restaurant,
    requestSerialize: serialize_restaurant_Empty,
    requestDeserialize: deserialize_restaurant_Empty,
    responseSerialize: serialize_restaurant_Restaurant,
    responseDeserialize: deserialize_restaurant_Restaurant,
  },
  // *
  // Update a Restaurant 
  // @required: restJWT
  updateRestaurant: {
    path: '/restaurant.RestaurantService/UpdateRestaurant',
    requestStream: false,
    responseStream: false,
    requestType: restaurant_pb.Restaurant,
    responseType: basic_pb.Id,
    requestSerialize: serialize_restaurant_Restaurant,
    requestDeserialize: deserialize_restaurant_Restaurant,
    responseSerialize: serialize_restaurant_Id,
    responseDeserialize: deserialize_restaurant_Id,
  },
  // *
  // Delete a Restaurant 
  // @required: salesJwt
  deleteRestaurant: {
    path: '/restaurant.RestaurantService/DeleteRestaurant',
    requestStream: false,
    responseStream: false,
    requestType: basic_pb.Id,
    responseType: basic_pb.Id,
    requestSerialize: serialize_restaurant_Id,
    requestDeserialize: deserialize_restaurant_Id,
    responseSerialize: serialize_restaurant_Id,
    responseDeserialize: deserialize_restaurant_Id,
  },
};

exports.RestaurantServiceClient = grpc.makeGenericClientConstructor(RestaurantServiceService);
