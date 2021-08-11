import { ActionSource } from "../enums";
import {ReactElement} from "react";

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

export type ServerProps = {
  data: object
  headers: object
  url: string
}

export type ReactContextProps = {
  children: ReactElement
  config: Config
}

export type Config = {
  apiKey: string
  pixelId: number
  wrapperUrl: string
  testCode?: string
}
