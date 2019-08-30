import {Schema, Types, model} from 'mongoose';

const userSchema = Schema({
    _id: Types.ObjectId,
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    phoneNo: {type: String},
    username: {type: String},
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    },
    password: {type: String, required: true},
}, {timestamps: true});

export default model('User', userSchema);
