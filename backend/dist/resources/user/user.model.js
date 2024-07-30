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
const crypto_1 = __importDefault(require("crypto"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    uid: {
        type: String,
        required: [true, 'Please provide uid'],
    },
    password: {
        type: String,
        minlength: 6,
        select: false,
        required: [true, 'Please provide password'],
    },
    token: String,
    tokenExpire: Date,
});
UserSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!this.isModified('password')) {
            next();
        }
        const salt = yield bcryptjs_1.default.genSalt(10);
        this.password = yield bcryptjs_1.default.hash(this.password, salt);
        next();
    });
});
UserSchema.methods.matchPassword = function (password) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield bcryptjs_1.default.compare(password, this.password);
    });
};
//Token for local storage
UserSchema.methods.getSignedJwtToken = function () {
    return jsonwebtoken_1.default.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    });
};
// Reset token and add to database hashed (private) version of token
UserSchema.methods.getToken = function () {
    const token = crypto_1.default.randomBytes(20).toString('hex');
    // Hash token (private key) and save to database
    this.token = crypto_1.default
        .createHash('sha256')
        .update(token)
        .digest('hex');
    // Set token expire date
    this.tokenExpire = Date.now() + 10 * (60 * 1000); // Ten Minutes
    //this.tokenExpire = Date.now() + 60 * (60 * 1000); // 1 hour
    //this.tokenExpire = Date.now() + 10 * (5 * 1000); // 1min
    return token;
};
exports.default = (0, mongoose_1.model)('User', UserSchema);
;
