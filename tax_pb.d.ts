// package: restaurant
// file: tax.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as basic_pb from "./basic_pb";

export class Tax extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getRestId(): string;
  setRestId(value: string): void;

  hasName(): boolean;
  clearName(): void;
  getName(): basic_pb.Name | undefined;
  setName(value?: basic_pb.Name): void;

  getInclusive(): boolean;
  setInclusive(value: boolean): void;

  getIsPercentage(): boolean;
  setIsPercentage(value: boolean): void;

  getValue(): number;
  setValue(value: number): void;

  clearOrderTypesList(): void;
  getOrderTypesList(): Array<OrderTypeMap[keyof OrderTypeMap]>;
  setOrderTypesList(value: Array<OrderTypeMap[keyof OrderTypeMap]>): void;
  addOrderTypes(value: OrderTypeMap[keyof OrderTypeMap], index?: number): OrderTypeMap[keyof OrderTypeMap];

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tax.AsObject;
  static toObject(includeInstance: boolean, msg: Tax): Tax.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Tax, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tax;
  static deserializeBinaryFromReader(message: Tax, reader: jspb.BinaryReader): Tax;
}

export namespace Tax {
  export type AsObject = {
    id: string,
    restId: string,
    name?: basic_pb.Name.AsObject,
    inclusive: boolean,
    isPercentage: boolean,
    value: number,
    orderTypesList: Array<OrderTypeMap[keyof OrderTypeMap]>,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export interface OrderTypeMap {
  DINEIN: 0;
  TAKEAWAY: 1;
  AGGREGATORS: 2;
  QSR: 3;
}

export const OrderType: OrderTypeMap;

