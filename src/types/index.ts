import { ActionSource } from "../enums";

export interface IPixelConfig {
  pixelId: number;
  testEventCode?: string;
}

export interface IEventData {
  serverData: IServerData;
  userData?: IUserData;
  customData?: ICustomData;
}

export interface IServerData {
  eventId?: number;
  eventName: string;
  eventTime?: number;
  eventSourceUrl: string;
  actionSource: ActionSource;
}

export interface IUserData {
  [key: string]: unknown;
  firstName: string;
  lastName: string;
  email: string;
}

export interface ICustomData {
  [key: string]: unknown;
}

export class EventDataClass implements IEventData {
  serverData: IServerData;
  userData?: IUserData;
  customData?: ICustomData;
}
