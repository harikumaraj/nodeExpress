import multer from 'multer';
import storage from './storage';
import fileFilter from './fileFilter';

export default (destination, nameGenerator, validTypes, limits) => {

    return multer({
        storage: storage(destination, nameGenerator),
        fileFilter: fileFilter(validTypes),
        limits:  limits || 1024 * 1024 * 5,
    });
}