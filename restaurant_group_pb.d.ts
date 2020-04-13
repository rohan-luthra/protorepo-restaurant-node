// package: restaurant
// file: restaurant_group.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as basic_pb from "./basic_pb";
import * as restaurant_pb from "./restaurant_pb";

export class RestaurantGroup extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  getHasword(): string;
  setHasword(value: string): void;

  getHashwordSalt(): number;
  setHashwordSalt(value: number): void;

  clearContactsList(): void;
  getContactsList(): Array<RestaurantGroup.Contact>;
  setContactsList(value: Array<RestaurantGroup.Contact>): void;
  addContacts(value?: RestaurantGroup.Contact, index?: number): RestaurantGroup.Contact;

  getPersonOfContact(): string;
  setPersonOfContact(value: string): void;

  clearRestaurantsList(): void;
  getRestaurantsList(): Array<basic_pb.RestId>;
  setRestaurantsList(value: Array<basic_pb.RestId>): void;
  addRestaurants(value?: basic_pb.RestId, index?: number): basic_pb.RestId;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RestaurantGroup.AsObject;
  static toObject(includeInstance: boolean, msg: RestaurantGroup): RestaurantGroup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RestaurantGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RestaurantGroup;
  static deserializeBinaryFromReader(message: RestaurantGroup, reader: jspb.BinaryReader): RestaurantGroup;
}

export namespace RestaurantGroup {
  export type AsObject = {
    id: string,
    username: string,
    hasword: string,
    hashwordSalt: number,
    contactsList: Array<RestaurantGroup.Contact.AsObject>,
    personOfContact: string,
    restaurantsList: Array<basic_pb.RestId.AsObject>,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export class Contact extends jspb.Message {
    getPhoneNumber(): string;
    setPhoneNumber(value: string): void;

    getEmail(): string;
    setEmail(value: string): void;

    getName(): string;
    setName(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Contact.AsObject;
    static toObject(includeInstance: boolean, msg: Contact): Contact.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Contact, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Contact;
    static deserializeBinaryFromReader(message: Contact, reader: jspb.BinaryReader): Contact;
  }

  export namespace Contact {
    export type AsObject = {
      phoneNumber: string,
      email: string,
      name: string,
    }
  }
}

export interface RestaurantGroupTypeMap {
  MALL: 0;
  FRANCHISE: 1;
}

export const RestaurantGroupType: RestaurantGroupTypeMap;

