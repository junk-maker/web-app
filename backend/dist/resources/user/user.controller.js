"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_validation_1 = require("@/resources/user/user.validation");
const express_1 = require("express");
const sending_data_service_1 = require("@/utils/services/sending.data.service");
class UserController {
    constructor() {
        this.path = '/auth';
        this.router = (0, express_1.Router)();
        this.UserValidation = user_validation_1.userValidation;
        this.SendingDataService = sending_data_service_1.sendingDataService;
        this.login = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let { id, password } = req.body;
            try {
                let response = yield this.UserValidation.login(id, password);
                this.SendingDataService.sendToken(res, response, 200);
            }
            catch (err) {
                return next(err);
            }
            ;
        });
        this.register = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let { id, password } = req.body;
            try {
                let response = yield this.UserValidation.register(id, password);
                return this.SendingDataService.sendToken(res, response, 200);
            }
            catch (err) {
                return next(err);
            }
            ;
        });
        this.routes();
    }
    ;
    routes() {
        this.router.post(`${this.path}/sign-in`, this.login);
        this.router.post(`${this.path}/sign-up`, this.register);
    }
    ;
}
;
exports.default = UserController;
