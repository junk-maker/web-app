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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidation = void 0;
const user_model_1 = __importDefault(require("@/resources/user/user.model"));
class UserValidation {
    constructor() {
        this.user = user_model_1.default;
    }
    login(id, password) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!id || !password) {
                throw new Error('Please provide your id and password');
            }
            ;
            let user = yield this.user.findOne({ uid: id }).select('+password');
            if (!user) {
                throw new Error('User not found');
            }
            ;
            if (!(yield user.matchPassword(password))) {
                throw new Error('Password not found');
            }
            ;
            let token = user.getSignedJwtToken();
            return token;
        });
    }
    ;
    register(id, password) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!id || !password) {
                throw new Error('Please provide your id and password');
            }
            ;
            if (yield this.user.findOne({ uid: id })) {
                throw new Error('User already registered');
            }
            ;
            yield this.user.create({ uid: id, password });
            let user = yield this.user.findOne({ uid: id });
            if (!user) {
                throw new Error('User not found');
            }
            ;
            user.getToken();
            yield user.save();
            let token = user.getSignedJwtToken();
            return token;
        });
    }
    ;
}
;
exports.userValidation = new UserValidation();
