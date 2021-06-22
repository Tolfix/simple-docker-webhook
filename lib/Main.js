"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var events_1 = __importDefault(require("events"));
/**
 * @description Spins up a http server which listens on a POST request
 * @default endpoint = "/webhook"
 */
var SimpleDockerWebhook = /** @class */ (function () {
    function SimpleDockerWebhook(Port, options) {
        var _this = this;
        var _a, _b;
        this.Event = new events_1.default.EventEmitter();
        if (typeof Port === "number") {
            this.Port = Port;
            this.app = express_1.default();
            this.app.use(express_1.default.json());
            this.app.use(express_1.default.urlencoded({ extended: true }));
            this.app.post((_a = options === null || options === void 0 ? void 0 : options.endpoint) !== null && _a !== void 0 ? _a : "/webhook", function (req, res) {
                var body = req.body;
                _this.Event.emit("listen", body);
                return res.sendStatus(200);
            });
            this.app.listen(Port);
        }
        // Assume is an express app
        else {
            this.Server = Port;
            this.Server.use(express_1.default.json());
            this.Server.use(express_1.default.urlencoded({ extended: true }));
            this.Server.post((_b = options === null || options === void 0 ? void 0 : options.endpoint) !== null && _b !== void 0 ? _b : "/webhook", function (req, res) {
                var body = req.body;
                _this.Event.emit("listen", body);
                return res.sendStatus(200);
            });
        }
    }
    /**
     * @description
     */
    SimpleDockerWebhook.prototype.on = function (cb) {
        this.Event.on("listen", function (resp) {
            cb(resp);
        });
    };
    return SimpleDockerWebhook;
}());
exports.default = SimpleDockerWebhook;
