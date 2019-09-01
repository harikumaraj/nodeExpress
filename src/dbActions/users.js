import User from '../models/users';
import bcrypt from 'bcrypt';
import { Types } from 'mongoose';

import {userDTO} from '../dto/user.dto';

const saltRounds = 10;

export const userFindAll = () => {
    return User.find()
        .select('_id firstName lastName email username phoneNo');
};

export const userFindById = (_id) => {
    return User.findById(_id)
        .select('_id firstName lastName email username phoneNo');
};

export const userFind = ({ username, email, phoneNo, password }) => {
    return User.find({$or: [{username}, {email}, {phoneNo}]})
        .then((data) => {
            if (data.length > 0) {
                const user = data[0];
                return bcrypt.compare(password, user.password)
                    .then((val) => {
                        if (val) {
                            return userDTO(user._doc);
                        }
                        throw new Error('unauthorised');
                    });
            }
            throw new Error('unauthorised');
        });
};

export const userSave = (data) => {
    const payload = {
        ...data,
        _id: Types.ObjectId(),
    };
    return bcrypt.hash(payload.password, saltRounds).then((hash) => {
        const user = new User({
            ...payload,
            password: hash,
        });
        return user.save()
            .then((userRecord) => userDTO(userRecord._doc));
    }).catch((error) => {
        throw new Error(error);
    });
};

export const userUpdate = (_id, userObject) => {
    console.log(_id, userObject)
    return User.update({ _id }, userObject)
        .then(() => {
            return userFindById(_id);
        });
};

export const userDelete = (_id) => {
    return User.remove({ _id });
};
