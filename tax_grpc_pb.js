// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var tax_pb = require('./tax_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var basic_pb = require('./basic_pb.js');

function serialize_restaurant_Id(arg) {
  if (!(arg instanceof basic_pb.Id)) {
    throw new Error('Expected argument of type restaurant.Id');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_restaurant_Id(buffer_arg) {
  return basic_pb.Id.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_restaurant_RestId(arg) {
  if (!(arg instanceof basic_pb.RestId)) {
    throw new Error('Expected argument of type restaurant.RestId');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_restaurant_RestId(buffer_arg) {
  return basic_pb.RestId.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_restaurant_Tax(arg) {
  if (!(arg instanceof tax_pb.Tax)) {
    throw new Error('Expected argument of type restaurant.Tax');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_restaurant_Tax(buffer_arg) {
  return tax_pb.Tax.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_restaurant_TaxId(arg) {
  if (!(arg instanceof basic_pb.TaxId)) {
    throw new Error('Expected argument of type restaurant.TaxId');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_restaurant_TaxId(buffer_arg) {
  return basic_pb.TaxId.deserializeBinary(new Uint8Array(buffer_arg));
}


var TaxServiceService = exports.TaxServiceService = {
  addTax: {
    path: '/restaurant.TaxService/AddTax',
    requestStream: false,
    responseStream: false,
    requestType: tax_pb.Tax,
    responseType: basic_pb.Id,
    requestSerialize: serialize_restaurant_Tax,
    requestDeserialize: deserialize_restaurant_Tax,
    responseSerialize: serialize_restaurant_Id,
    responseDeserialize: deserialize_restaurant_Id,
  },
  updateTax: {
    path: '/restaurant.TaxService/UpdateTax',
    requestStream: false,
    responseStream: false,
    requestType: tax_pb.Tax,
    responseType: tax_pb.Tax,
    requestSerialize: serialize_restaurant_Tax,
    requestDeserialize: deserialize_restaurant_Tax,
    responseSerialize: serialize_restaurant_Tax,
    responseDeserialize: deserialize_restaurant_Tax,
  },
  getTax: {
    path: '/restaurant.TaxService/GetTax',
    requestStream: false,
    responseStream: false,
    requestType: basic_pb.TaxId,
    responseType: tax_pb.Tax,
    requestSerialize: serialize_restaurant_TaxId,
    requestDeserialize: deserialize_restaurant_TaxId,
    responseSerialize: serialize_restaurant_Tax,
    responseDeserialize: deserialize_restaurant_Tax,
  },
  getRestTax: {
    path: '/restaurant.TaxService/GetRestTax',
    requestStream: false,
    responseStream: true,
    requestType: basic_pb.RestId,
    responseType: tax_pb.Tax,
    requestSerialize: serialize_restaurant_RestId,
    requestDeserialize: deserialize_restaurant_RestId,
    responseSerialize: serialize_restaurant_Tax,
    responseDeserialize: deserialize_restaurant_Tax,
  },
  deleteTax: {
    path: '/restaurant.TaxService/DeleteTax',
    requestStream: false,
    responseStream: false,
    requestType: basic_pb.Id,
    responseType: basic_pb.TaxId,
    requestSerialize: serialize_restaurant_Id,
    requestDeserialize: deserialize_restaurant_Id,
    responseSerialize: serialize_restaurant_TaxId,
    responseDeserialize: deserialize_restaurant_TaxId,
  },
};

exports.TaxServiceClient = grpc.makeGenericClientConstructor(TaxServiceService);
