/// <reference types="node" />
import { Application } from "express";
import event from "events";
import Options from "./interfaces/Options";
import Body from "./interfaces/Body";
/**
 * @description Spins up a http server which listens on a POST request
 * @default endpoint = "/webhook"
 */
export default class SimpleDockerWebhook<P extends Application | number> {
    protected Port: number | undefined;
    protected Server: Application | undefined;
    protected Secret: string | undefined;
    protected app: import("express-serve-static-core").Express | undefined;
    protected Event: event;
    constructor(Port: number | P, options?: Options);
    /**
     * @description
     */
    on(cb: (res: Body) => void): void;
}
