import {Schema, Types, model} from 'mongoose';

const orderSchema = Schema({
    _id: Types.ObjectId,
    product: {type: Object, ref: 'Product'},
    quantity: {type: Number, default: 1},
}, {timestamps: true});

export default model('Order', orderSchema);
