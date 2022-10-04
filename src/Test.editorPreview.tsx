import { ReactElement, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";
import { TestPreviewProps } from "../typings/TestProps";

export function preview({ sampleText }: TestPreviewProps): ReactElement {
    return <HelloWorldSample sampleText={sampleText} />;
}

export function getPreviewCss(): string {
    return require("./ui/Test.css");
}
