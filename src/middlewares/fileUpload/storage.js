import multer from 'multer';

export default (destination = './images', nameGenerator) => {
    return multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, destination);
        },
        filename: (req, file, cb) => {
            cb(null, nameGenerator ? nameGenerator(file) : `${new Date().toISOString()}-${file.originalname}`);
        },
    })
}