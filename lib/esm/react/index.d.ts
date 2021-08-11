import React from "react";
import { ReactContextProps } from "../types";
import FacebookConversion from "../index";
export declare const FacebookEventTrackerContext: React.Context<FacebookConversion | null>;
export declare const FacebookEventProvider: ({ children, config }: ReactContextProps) => JSX.Element;
