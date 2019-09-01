import multer from 'multer';

export default (validTypes = ['image/jpeg', 'image/png']) => {
    return (req, file, cb) => {
        console.log(`${validTypes.map((validType, index) => `${index > 0 ? ' || ': ''}file.mimetype === ${validType}`)}`);
        if (eval(`${validTypes.map((validType, index) => `${index > 0 ? ' || ': ''}file.mimetype === ${validType}`)}`)) {
            cb(null, true);
        } else {
            cb(new Error('file not valid'), false);
        }
    }
};