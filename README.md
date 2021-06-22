# Simple Webhook Github
![](https://nodei.co/npm/simple-docker-webhook.svg)

This package is used to spin up a webserver to get `POST` requests from docker webhook.

# Installing
``npm install simple-docker-webhook``

# Examples - Simple

You can setup a simple webhook like this..

`Typescript`
```ts
import SimpleWebhook from "simple-docker-webhook";

const Port = 3000;
const webhook = new SimpleWebhook(Port);

webhook.on(response => {
    // Do something
})
```

`JavaScript`
```js
const SimpleWebhook = require("simple-docker-webhook");

const Port = 3000;
const webhook = new SimpleWebhook.default(Port);

webhook.on(response => {
    // Do something
})
```

# Examples - Express

You can also use express as an middleware

`Typescript`
```ts
import SimpleWebhook from "simple-docker-webhook";
import Express from "express";

const Port = 3000;
const app = Express();
const webhook = new SimpleWebhook(app);

webhook.on(response => {
    // Do something
})

app.listen(Port);
```

`JavaScript`
```js
const SimpleWebhook = require("simple-docker-webhook");
const Express = require("express");

const Port = 3000;
const app = Express();
const webhook = new SimpleWebhook.default(app);

webhook.on(response => {
    // Do something
})

app.listen(Port);
```

# Configurations

```ts
...
interface Options 
{
    /**
     * @param endpoint The endpoint for the webserver
     * @default /webhook
     */
    endpoint: string;
}
...
```