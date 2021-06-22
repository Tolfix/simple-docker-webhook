import Express from "express"
import { Application } from "express";
import event from "events";
import Options from "./interfaces/Options";


/**
 * @description Spins up a http server which listens on a POST request
 * @default endpoint = "/webhook"
 */
export default class SimpleDockerWebhook<P extends Application | number>
{
    protected Port: number | undefined;
    protected Server: Application | undefined
    protected Secret: string | undefined;
    protected app;
    protected Event = new event.EventEmitter();

    constructor(Port: number | P, options?: Options)
    {
        if(typeof Port === "number")
        {
            this.Port = Port;
            this.app = Express();
            this.app.use(Express.json())
            this.app.use(Express.urlencoded({ extended: true }));
            this.app.post(options?.endpoint ?? "/webhook", (req, res) => {
                let body = req.body

                this.Event.emit("listen", body);
                
                return res.sendStatus(200);
            });
    
            this.app.listen(Port);
        }
        // Assume is an express app
        else
        {
            this.Server = Port as Application;
            this.Server.use(Express.json())
            this.Server.use(Express.urlencoded({ extended: true }));
            this.Server.post(options?.endpoint ?? "/webhook", (req, res) => {
                let body = req.body

                this.Event.emit("listen", body);
                
                return res.sendStatus(200);
            });
        }
    }

    /**
     * @description
     */
    public on(cb: (res: any) => void)
    {
        this.Event.on("listen", (resp) => {
            cb(resp)
        });
    }
}