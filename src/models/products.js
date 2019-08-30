import {Schema, Types, model} from 'mongoose';

const productSchema = Schema({
    _id: Types.ObjectId,
    name: {type: String, required: true},
    price: {type: Number, required: true},
    unit: {type: String, required: true},
    vendor: {type: String},
    image: {type: String},
}, {timestamps: true});

export default model('Product', productSchema);
