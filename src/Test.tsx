import { ReactElement, createElement, useEffect } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";

import { TestContainerProps } from "../typings/TestProps";

import { loadPrivIdModule } from "@privateid/cryptonets-web-sdk";

import "./ui/Test.css";

export function Test({ sampleText }: TestContainerProps): ReactElement {
    useEffect(() => {
        loadPrivIdModule();
    });
    return <HelloWorldSample sampleText={sampleText ? sampleText : "World"} />;
}
