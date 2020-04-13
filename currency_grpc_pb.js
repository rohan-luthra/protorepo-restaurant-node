// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var currency_pb = require('./currency_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var basic_pb = require('./basic_pb.js');

function serialize_restaurant_Currency(arg) {
  if (!(arg instanceof currency_pb.Currency)) {
    throw new Error('Expected argument of type restaurant.Currency');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_restaurant_Currency(buffer_arg) {
  return currency_pb.Currency.deserializeBinary(new Uint8Array(buffer_arg));
}

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


var CurrencyServiceService = exports.CurrencyServiceService = {
  // Adds a new Curreny
  addCurrency: {
    path: '/restaurant.CurrencyService/AddCurrency',
    requestStream: false,
    responseStream: false,
    requestType: currency_pb.Currency,
    responseType: basic_pb.Id,
    requestSerialize: serialize_restaurant_Currency,
    requestDeserialize: deserialize_restaurant_Currency,
    responseSerialize: serialize_restaurant_Id,
    responseDeserialize: deserialize_restaurant_Id,
  },
  // Updates current Currency 
  updateCurrency: {
    path: '/restaurant.CurrencyService/UpdateCurrency',
    requestStream: false,
    responseStream: false,
    requestType: currency_pb.Currency,
    responseType: basic_pb.Id,
    requestSerialize: serialize_restaurant_Currency,
    requestDeserialize: deserialize_restaurant_Currency,
    responseSerialize: serialize_restaurant_Id,
    responseDeserialize: deserialize_restaurant_Id,
  },
  // Remove Curreny if not used by any restaurant
  removeCurrency: {
    path: '/restaurant.CurrencyService/RemoveCurrency',
    requestStream: false,
    responseStream: false,
    requestType: basic_pb.Id,
    responseType: basic_pb.Id,
    requestSerialize: serialize_restaurant_Id,
    requestDeserialize: deserialize_restaurant_Id,
    responseSerialize: serialize_restaurant_Id,
    responseDeserialize: deserialize_restaurant_Id,
  },
  // Get All the Currecny
  getCurrencies: {
    path: '/restaurant.CurrencyService/GetCurrencies',
    requestStream: false,
    responseStream: true,
    requestType: basic_pb.Empty,
    responseType: currency_pb.Currency,
    requestSerialize: serialize_restaurant_Empty,
    requestDeserialize: deserialize_restaurant_Empty,
    responseSerialize: serialize_restaurant_Currency,
    responseDeserialize: deserialize_restaurant_Currency,
  },
};

exports.CurrencyServiceClient = grpc.makeGenericClientConstructor(CurrencyServiceService);
