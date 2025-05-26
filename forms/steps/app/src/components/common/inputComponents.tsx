import type {InputType} from "./types.ts";
import React from "react";
import {DatePicker, Input, InputNumber} from "antd";

export const inputComponents: Record<InputType, React.ReactNode> = {
    number: <InputNumber className="full-width" />,
    date: <DatePicker format="DD.MM.YYYY" className="full-width"/>,
    text: <Input className="full-width" />,
};