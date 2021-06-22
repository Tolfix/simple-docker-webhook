import Webhook from "../../src/Main";

const webhook = new Webhook(3000);

webhook.on((body) => {
    console.log(body);
});
