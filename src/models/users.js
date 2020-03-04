import {Schema, Types, model} from 'mongoose';

const userSchema = Schema({
    _id: Types.ObjectId,
    firstName: {type: String},
    lastName: {type: String},
    phoneNo: {type: String, unique: true},
    username: {type: String, unique: true, required: true},
    email: {
        type: String,
        unique: true,
        match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    },
    role: {type: Array, default: ["ROLE_USER"]},
    password: {type: String, required: true},
}, {timestamps: true});

export default model('User', userSchema);
