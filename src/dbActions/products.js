import Product from '../models/products';
import { Types } from 'mongoose';

export const productFindAll = () => {
    return Product.find()
        .select('_id name price unit');
};

export const productFindById = (_id) => {
    return Product.findById(_id)
        .select('_id name price unit');
};

export const productSave = (data) => {
    const payload = {
        ...data,
        _id: Types.ObjectId(),
    };
    const product = new Product(payload);
    return product.save();
};

export const productUpdate = (_id, productObject) => {
    return Product.update({ _id }, productObject)
        .then(() => {
            return productFindById(_id);
        });
};

export const productDelete = (_id) => {
    return Product.remove({ _id });
};
