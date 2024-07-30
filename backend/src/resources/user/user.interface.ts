import {Types} from 'mongoose';

export default interface User {
    uid: string;
    password: string;
    _id: Types.ObjectId;
    token?: string | undefined;
    tokenExpire?: Date | undefined;

    getToken: () => string;
    getSignedJwtToken: () => string;
    matchPassword: (password: string) => Promise<boolean>;
};