import Order from '../models/orders';
import { orderDTO } from '../dto/orders.dto';
import { Types } from 'mongoose';

export const orderFindAll = () => {
    return Order.find()
        .select('_id product quantity')
        .populate({
            path: 'product',
            model: 'Product',
            select: '_id name price unit',
        });
};

export const orderFindById = (_id) => {
    return Order.findById(_id)
        .select('_id product quantity')
        .populate({
            path: 'product',
            model: 'Product',
            select: '_id name price unit',
        });
};

export const orderSave = (data) => {
    const payload = {
        ...data,
        _id: Types.ObjectId(),
    };
    const order = new Order(payload);
    order.populate({
        path: 'product',
        model: 'Product',
        select: '_id name price unit',
    }).execPopulate();
    return order.save()
        .then((data) => {
            return orderDTO(data._doc);
        });
};

export const orderUpdate = (_id, orderObject) => {
    return Order.update({ _id }, orderObject)
        .then(result => {
            return orderFindById(_id);
        });
};

export const orderDelete = (_id) => {
    return Order.remove({ _id });
};
