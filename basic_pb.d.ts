// package: restaurant
// file: basic.proto

import * as jspb from "google-protobuf";

export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}

export class Name extends jspb.Message {
  getEn(): string;
  setEn(value: string): void;

  getJa(): string;
  setJa(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Name.AsObject;
  static toObject(includeInstance: boolean, msg: Name): Name.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Name, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Name;
  static deserializeBinaryFromReader(message: Name, reader: jspb.BinaryReader): Name;
}

export namespace Name {
  export type AsObject = {
    en: string,
    ja: string,
  }
}

export class Description extends jspb.Message {
  getEn(): string;
  setEn(value: string): void;

  getJa(): string;
  setJa(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Description.AsObject;
  static toObject(includeInstance: boolean, msg: Description): Description.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Description, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Description;
  static deserializeBinaryFromReader(message: Description, reader: jspb.BinaryReader): Description;
}

export namespace Description {
  export type AsObject = {
    en: string,
    ja: string,
  }
}

export class Id extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Id.AsObject;
  static toObject(includeInstance: boolean, msg: Id): Id.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Id, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Id;
  static deserializeBinaryFromReader(message: Id, reader: jspb.BinaryReader): Id;
}

export namespace Id {
  export type AsObject = {
    id: string,
  }
}

export class RestId extends jspb.Message {
  getRestId(): string;
  setRestId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RestId.AsObject;
  static toObject(includeInstance: boolean, msg: RestId): RestId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RestId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RestId;
  static deserializeBinaryFromReader(message: RestId, reader: jspb.BinaryReader): RestId;
}

export namespace RestId {
  export type AsObject = {
    restId: string,
  }
}

export class RestGroupId extends jspb.Message {
  getRestGroupId(): string;
  setRestGroupId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RestGroupId.AsObject;
  static toObject(includeInstance: boolean, msg: RestGroupId): RestGroupId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RestGroupId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RestGroupId;
  static deserializeBinaryFromReader(message: RestGroupId, reader: jspb.BinaryReader): RestGroupId;
}

export namespace RestGroupId {
  export type AsObject = {
    restGroupId: string,
  }
}

export class TaxId extends jspb.Message {
  getTaxId(): string;
  setTaxId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaxId.AsObject;
  static toObject(includeInstance: boolean, msg: TaxId): TaxId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TaxId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaxId;
  static deserializeBinaryFromReader(message: TaxId, reader: jspb.BinaryReader): TaxId;
}

export namespace TaxId {
  export type AsObject = {
    taxId: string,
  }
}

export class CurrencyId extends jspb.Message {
  getCurrencyId(): string;
  setCurrencyId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CurrencyId.AsObject;
  static toObject(includeInstance: boolean, msg: CurrencyId): CurrencyId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CurrencyId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CurrencyId;
  static deserializeBinaryFromReader(message: CurrencyId, reader: jspb.BinaryReader): CurrencyId;
}

export namespace CurrencyId {
  export type AsObject = {
    currencyId: string,
  }
}

