// package: restaurant
// file: restaurant.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as basic_pb from "./basic_pb";
import * as currency_pb from "./currency_pb";

export class Payment extends jspb.Message {
  getGstin(): string;
  setGstin(value: string): void;

  getPan(): string;
  setPan(value: string): void;

  getUpi(): string;
  setUpi(value: string): void;

  getBankName(): string;
  setBankName(value: string): void;

  getAccountName(): string;
  setAccountName(value: string): void;

  getAccountNumber(): string;
  setAccountNumber(value: string): void;

  getIfsc(): string;
  setIfsc(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Payment.AsObject;
  static toObject(includeInstance: boolean, msg: Payment): Payment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Payment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Payment;
  static deserializeBinaryFromReader(message: Payment, reader: jspb.BinaryReader): Payment;
}

export namespace Payment {
  export type AsObject = {
    gstin: string,
    pan: string,
    upi: string,
    bankName: string,
    accountName: string,
    accountNumber: string,
    ifsc: string,
  }
}

export class Slots extends jspb.Message {
  getStartTime(): string;
  setStartTime(value: string): void;

  getEndTime(): string;
  setEndTime(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Slots.AsObject;
  static toObject(includeInstance: boolean, msg: Slots): Slots.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Slots, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Slots;
  static deserializeBinaryFromReader(message: Slots, reader: jspb.BinaryReader): Slots;
}

export namespace Slots {
  export type AsObject = {
    startTime: string,
    endTime: string,
  }
}

export class Timings extends jspb.Message {
  getDay(): DaysMap[keyof DaysMap];
  setDay(value: DaysMap[keyof DaysMap]): void;

  clearSlotsList(): void;
  getSlotsList(): Array<Slots>;
  setSlotsList(value: Array<Slots>): void;
  addSlots(value?: Slots, index?: number): Slots;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Timings.AsObject;
  static toObject(includeInstance: boolean, msg: Timings): Timings.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Timings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Timings;
  static deserializeBinaryFromReader(message: Timings, reader: jspb.BinaryReader): Timings;
}

export namespace Timings {
  export type AsObject = {
    day: DaysMap[keyof DaysMap],
    slotsList: Array<Slots.AsObject>,
  }
}

export class Address extends jspb.Message {
  getLine1(): string;
  setLine1(value: string): void;

  getLine2(): string;
  setLine2(value: string): void;

  getCity(): string;
  setCity(value: string): void;

  getState(): string;
  setState(value: string): void;

  getCountry(): string;
  setCountry(value: string): void;

  getPincode(): number;
  setPincode(value: number): void;

  getGeoLatitude(): number;
  setGeoLatitude(value: number): void;

  getGeoLongitude(): number;
  setGeoLongitude(value: number): void;

  getTimezone(): string;
  setTimezone(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Address.AsObject;
  static toObject(includeInstance: boolean, msg: Address): Address.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Address, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Address;
  static deserializeBinaryFromReader(message: Address, reader: jspb.BinaryReader): Address;
}

export namespace Address {
  export type AsObject = {
    line1: string,
    line2: string,
    city: string,
    state: string,
    country: string,
    pincode: number,
    geoLatitude: number,
    geoLongitude: number,
    timezone: string,
  }
}

export class Restaurant extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasName(): boolean;
  clearName(): void;
  getName(): basic_pb.Name | undefined;
  setName(value?: basic_pb.Name): void;

  getUsername(): string;
  setUsername(value: string): void;

  getHashword(): string;
  setHashword(value: string): void;

  getHashwordSalt(): number;
  setHashwordSalt(value: number): void;

  clearContactsList(): void;
  getContactsList(): Array<Restaurant.Contact>;
  setContactsList(value: Array<Restaurant.Contact>): void;
  addContacts(value?: Restaurant.Contact, index?: number): Restaurant.Contact;

  getPersonOfContact(): string;
  setPersonOfContact(value: string): void;

  getLogo(): string;
  setLogo(value: string): void;

  getProfileImage(): string;
  setProfileImage(value: string): void;

  getActive(): boolean;
  setActive(value: boolean): void;

  hasAddress(): boolean;
  clearAddress(): void;
  getAddress(): Address | undefined;
  setAddress(value?: Address): void;

  clearImagesList(): void;
  getImagesList(): Array<string>;
  setImagesList(value: Array<string>): void;
  addImages(value: string, index?: number): string;

  clearFcmTokensList(): void;
  getFcmTokensList(): Array<string>;
  setFcmTokensList(value: Array<string>): void;
  addFcmTokens(value: string, index?: number): string;

  clearPaymentModeList(): void;
  getPaymentModeList(): Array<PaymentModesMap[keyof PaymentModesMap]>;
  setPaymentModeList(value: Array<PaymentModesMap[keyof PaymentModesMap]>): void;
  addPaymentMode(value: PaymentModesMap[keyof PaymentModesMap], index?: number): PaymentModesMap[keyof PaymentModesMap];

  clearTimingsList(): void;
  getTimingsList(): Array<Timings>;
  setTimingsList(value: Array<Timings>): void;
  addTimings(value?: Timings, index?: number): Timings;

  getSubscriptionPlan(): SubscriptionPlanMap[keyof SubscriptionPlanMap];
  setSubscriptionPlan(value: SubscriptionPlanMap[keyof SubscriptionPlanMap]): void;

  getSubscriptionPrice(): number;
  setSubscriptionPrice(value: number): void;

  hasCurreny(): boolean;
  clearCurreny(): void;
  getCurreny(): currency_pb.Currency | undefined;
  setCurreny(value?: currency_pb.Currency): void;

  getAssignedSalesEmpId(): string;
  setAssignedSalesEmpId(value: string): void;

  getAssignedOpsEmpId(): string;
  setAssignedOpsEmpId(value: string): void;

  getTrialDays(): number;
  setTrialDays(value: number): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Restaurant.AsObject;
  static toObject(includeInstance: boolean, msg: Restaurant): Restaurant.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Restaurant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Restaurant;
  static deserializeBinaryFromReader(message: Restaurant, reader: jspb.BinaryReader): Restaurant;
}

export namespace Restaurant {
  export type AsObject = {
    id: string,
    name?: basic_pb.Name.AsObject,
    username: string,
    hashword: string,
    hashwordSalt: number,
    contactsList: Array<Restaurant.Contact.AsObject>,
    personOfContact: string,
    logo: string,
    profileImage: string,
    active: boolean,
    address?: Address.AsObject,
    imagesList: Array<string>,
    fcmTokensList: Array<string>,
    paymentModeList: Array<PaymentModesMap[keyof PaymentModesMap]>,
    timingsList: Array<Timings.AsObject>,
    subscriptionPlan: SubscriptionPlanMap[keyof SubscriptionPlanMap],
    subscriptionPrice: number,
    curreny?: currency_pb.Currency.AsObject,
    assignedSalesEmpId: string,
    assignedOpsEmpId: string,
    trialDays: number,
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

export class AddRestaurantReq extends jspb.Message {
  hasName(): boolean;
  clearName(): void;
  getName(): basic_pb.Name | undefined;
  setName(value?: basic_pb.Name): void;

  getUsername(): string;
  setUsername(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getContactNumber(): string;
  setContactNumber(value: string): void;

  getPersonOfContact(): string;
  setPersonOfContact(value: string): void;

  getLogo(): string;
  setLogo(value: string): void;

  getProfileImage(): string;
  setProfileImage(value: string): void;

  getActive(): boolean;
  setActive(value: boolean): void;

  hasAddress(): boolean;
  clearAddress(): void;
  getAddress(): Address | undefined;
  setAddress(value?: Address): void;

  clearPaymentModeList(): void;
  getPaymentModeList(): Array<PaymentModesMap[keyof PaymentModesMap]>;
  setPaymentModeList(value: Array<PaymentModesMap[keyof PaymentModesMap]>): void;
  addPaymentMode(value: PaymentModesMap[keyof PaymentModesMap], index?: number): PaymentModesMap[keyof PaymentModesMap];

  clearTimingsList(): void;
  getTimingsList(): Array<Timings>;
  setTimingsList(value: Array<Timings>): void;
  addTimings(value?: Timings, index?: number): Timings;

  getSubscriptionPlan(): SubscriptionPlanMap[keyof SubscriptionPlanMap];
  setSubscriptionPlan(value: SubscriptionPlanMap[keyof SubscriptionPlanMap]): void;

  getSubscriptionPrice(): number;
  setSubscriptionPrice(value: number): void;

  getDefaultCurrenyId(): string;
  setDefaultCurrenyId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddRestaurantReq.AsObject;
  static toObject(includeInstance: boolean, msg: AddRestaurantReq): AddRestaurantReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddRestaurantReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddRestaurantReq;
  static deserializeBinaryFromReader(message: AddRestaurantReq, reader: jspb.BinaryReader): AddRestaurantReq;
}

export namespace AddRestaurantReq {
  export type AsObject = {
    name?: basic_pb.Name.AsObject,
    username: string,
    password: string,
    contactNumber: string,
    personOfContact: string,
    logo: string,
    profileImage: string,
    active: boolean,
    address?: Address.AsObject,
    paymentModeList: Array<PaymentModesMap[keyof PaymentModesMap]>,
    timingsList: Array<Timings.AsObject>,
    subscriptionPlan: SubscriptionPlanMap[keyof SubscriptionPlanMap],
    subscriptionPrice: number,
    defaultCurrenyId: string,
  }
}

export interface SubscriptionPlanMap {
  MONTHLY: 0;
  QUATERLY: 1;
  HALF_YEARLY: 2;
  YEARLY: 3;
}

export const SubscriptionPlan: SubscriptionPlanMap;

export interface PaymentModesMap {
  CASH: 0;
  CARD: 1;
  ONLINE: 2;
  WALLET: 3;
}

export const PaymentModes: PaymentModesMap;

export interface DaysMap {
  MONDAY: 0;
  TUESDAY: 1;
  WEDNESDAY: 2;
  THURSDAY: 3;
  FRIDAY: 4;
  SATURDAY: 5;
  SUNDAY: 6;
}

export const Days: DaysMap;

