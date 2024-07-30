"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const mongoose_1 = __importDefault(require("mongoose"));
const compression_1 = __importDefault(require("compression"));
const error_middleware_1 = __importDefault(require("./middleware/error.middleware"));
const express_1 = __importDefault(require("express"));
class App {
    constructor(controllers, port) {
        this.port = port;
        this.express = (0, express_1.default)();
        this.red = '\x1b[31m%s\x1b[0m';
        this.blue = '\x1b[34m%s\x1b[0m';
        this.yellow = '\x1b[33m%s\x1b[0m';
        this.middleware();
        this.serveFrontend();
        this.databaseConnection();
        this.controllers(controllers);
    }
    ;
    middleware() {
        this.express.use((0, cors_1.default)());
        this.express.use((0, helmet_1.default)());
        this.express.use((0, compression_1.default)());
        this.express.use((0, morgan_1.default)('dev'));
        this.express.use(express_1.default.json());
        this.express.use(express_1.default.urlencoded({ extended: false }));
    }
    ;
    controllers(controllers) {
        controllers.forEach((controller) => {
            this.express.use('/api', controller.router);
        });
    }
    ;
    errorHandling() {
        this.express.use(error_middleware_1.default);
    }
    ;
    serveFrontend() {
        if (process.env.NODE_ENV === 'production') {
            this.express.use(express_1.default.static(path_1.default.join(__dirname, '../frontend/build')));
            this.express.get('*', (req, res) => res.sendFile(path_1.default.resolve(__dirname, '../', 'frontend', 'build', 'index.html')));
        }
        else {
            this.express.get('/', (req, res) => res.send('Please set to production'));
        }
        ;
    }
    ;
    databaseConnection() {
        mongoose_1.default.connect(`${process.env.MONGO_URI}`)
            .then(() => console.log(this.yellow, 'MongoDB connection SUCCESS!'))
            .catch(err => console.log(this.red, `MongoDB connection FAIL: ${err}`));
    }
    ;
    listen() {
        this.errorHandling();
        this.express.listen(this.port, () => {
            console.log(this.blue, `Server has been started on port ${this.port}!`);
        });
    }
    ;
}
;
exports.default = App;
