import {Schema, Types, model} from 'mongoose';

const orderSchema = Schema({
    _id: Types.ObjectId,
    product: {type: Object, ref: 'Product', required: true},
    quantity: {type: Number, default: 1, required: true},
    user: {type: Object, ref: 'User', required: true}
}, {timestamps: true});

export default model('Order', orderSchema);
