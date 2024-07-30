import crypto from 'crypto';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {model, Schema} from 'mongoose';
import User from '@/resources/user/user.interface';

const UserSchema = new Schema<User>({
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

UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

UserSchema.methods.matchPassword = async function(password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password);
};

//Token for local storage
UserSchema.methods.getSignedJwtToken = function(): string {
    return jwt.sign({id: this._id}, process.env.JWT_SECRET as jwt.Secret, {
        expiresIn: process.env.JWT_EXPIRE,
    });
};

// Reset token and add to database hashed (private) version of token
UserSchema.methods.getToken = function(): string {
    const token = crypto.randomBytes(20).toString('hex');

    // Hash token (private key) and save to database
    this.token = crypto
        .createHash('sha256')
        .update(token)
        .digest('hex');

    // Set token expire date
    this.tokenExpire = Date.now() + 10 * (60 * 1000); // Ten Minutes
    //this.tokenExpire = Date.now() + 60 * (60 * 1000); // 1 hour
    //this.tokenExpire = Date.now() + 10 * (5 * 1000); // 1min

    return token;
};

export default model<User>('User', UserSchema);;