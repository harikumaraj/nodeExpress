/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _routes_products__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes/products */ \"./src/routes/products.js\");\n/* harmony import */ var _routes_orders__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes/orders */ \"./src/routes/orders.js\");\n/* harmony import */ var _routes_users__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/users */ \"./src/routes/users.js\");\n/* harmony import */ var _routes_authenticate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/authenticate */ \"./src/routes/authenticate.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nObject(dotenv__WEBPACK_IMPORTED_MODULE_4__[\"config\"])();\n\nmongoose__WEBPACK_IMPORTED_MODULE_3___default.a.connect(process.env.DB_URL, { useNewUrlParser: true });\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\n\napp.use(morgan__WEBPACK_IMPORTED_MODULE_1___default()('dev'));\n\napp.use('/images', express__WEBPACK_IMPORTED_MODULE_0___default.a.static('images'));\n\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.json());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.urlencoded({ extended: true }));\n\napp.use((req, res, next) => {\n    res.header('Access-Control-Allow-Origin', '*');\n    res.header(\n        'Access-Control-Allow-Headers',\n        'Authorisation, Content-Type, Origin, X-Requested-With, Accept'\n    );\n    if (req.method === 'OPTIONS') {\n        res.header(\n            'Access-Control-Allow-Methods',\n            'GET, PUT, POST, PATCH, DELETE'\n        );\n        return res.status(200).json({});\n    }\n    next();\n});\n\napp.use('/', _routes_authenticate__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\napp.use('/products', _routes_products__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\napp.use('/orders', _routes_orders__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\napp.use('/users', _routes_users__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\n\napp.use((req, res, next) => {\n    const error = new Error('Not Found');\n    error.status = 404;\n    next(error);\n});\n\napp.use((error, req, res, next) => {\n    res.status(error.status || 500);\n    res.json({\n        error: {\n            message: error.message,\n        },\n    });\n    throw new Error(error);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/dbActions/orders.js":
/*!*********************************!*\
  !*** ./src/dbActions/orders.js ***!
  \*********************************/
/*! exports provided: orderFindAll, orderFindById, orderSave, orderUpdate, orderDelete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"orderFindAll\", function() { return orderFindAll; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"orderFindById\", function() { return orderFindById; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"orderSave\", function() { return orderSave; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"orderUpdate\", function() { return orderUpdate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"orderDelete\", function() { return orderDelete; });\n/* harmony import */ var _models_orders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/orders */ \"./src/models/orders.js\");\n/* harmony import */ var _dto_orders_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dto/orders.dto */ \"./src/dto/orders.dto.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst orderFindAll = () => {\n    return _models_orders__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find()\n        .select('_id product quantity')\n        .populate({\n            path: 'product',\n            model: 'Product',\n            select: '_id name price unit',\n        });\n};\n\nconst orderFindById = (_id) => {\n    return _models_orders__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(_id)\n        .select('_id product quantity')\n        .populate({\n            path: 'product',\n            model: 'Product',\n            select: '_id name price unit',\n        });\n};\n\nconst orderSave = (data) => {\n    const payload = {\n        ...data,\n        _id: mongoose__WEBPACK_IMPORTED_MODULE_2__[\"Types\"].ObjectId(),\n    };\n    const order = new _models_orders__WEBPACK_IMPORTED_MODULE_0__[\"default\"](payload);\n    order.populate({\n        path: 'product',\n        model: 'Product',\n        select: '_id name price unit',\n    }).execPopulate();\n    return order.save()\n        .then((data) => {\n            return Object(_dto_orders_dto__WEBPACK_IMPORTED_MODULE_1__[\"orderDTO\"])(data._doc);\n        });\n};\n\nconst orderUpdate = (_id, orderObject) => {\n    return _models_orders__WEBPACK_IMPORTED_MODULE_0__[\"default\"].update({ _id }, orderObject)\n        .then(result => {\n            return orderFindById(_id);\n        });\n};\n\nconst orderDelete = (_id) => {\n    return _models_orders__WEBPACK_IMPORTED_MODULE_0__[\"default\"].remove({ _id });\n};\n\n\n//# sourceURL=webpack:///./src/dbActions/orders.js?");

/***/ }),

/***/ "./src/dbActions/products.js":
/*!***********************************!*\
  !*** ./src/dbActions/products.js ***!
  \***********************************/
/*! exports provided: productFindAll, productFindById, productSave, productUpdate, productDelete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"productFindAll\", function() { return productFindAll; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"productFindById\", function() { return productFindById; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"productSave\", function() { return productSave; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"productUpdate\", function() { return productUpdate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"productDelete\", function() { return productDelete; });\n/* harmony import */ var _models_products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/products */ \"./src/models/products.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst productFindAll = () => {\n    return _models_products__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find()\n        .select('_id name price unit');\n};\n\nconst productFindById = (_id) => {\n    return _models_products__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(_id)\n        .select('_id name price unit');\n};\n\nconst productSave = (data) => {\n    const payload = {\n        ...data,\n        _id: mongoose__WEBPACK_IMPORTED_MODULE_1__[\"Types\"].ObjectId(),\n    };\n    const product = new _models_products__WEBPACK_IMPORTED_MODULE_0__[\"default\"](payload);\n    return product.save();\n};\n\nconst productUpdate = (_id, productObject) => {\n    return _models_products__WEBPACK_IMPORTED_MODULE_0__[\"default\"].update({ _id }, productObject)\n        .then(() => {\n            return productFindById(_id);\n        });\n};\n\nconst productDelete = (_id) => {\n    return _models_products__WEBPACK_IMPORTED_MODULE_0__[\"default\"].remove({ _id });\n};\n\n\n//# sourceURL=webpack:///./src/dbActions/products.js?");

/***/ }),

/***/ "./src/dbActions/users.js":
/*!********************************!*\
  !*** ./src/dbActions/users.js ***!
  \********************************/
/*! exports provided: userFindAll, userFindById, userFind, userSave, userUpdate, userDelete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"userFindAll\", function() { return userFindAll; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"userFindById\", function() { return userFindById; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"userFind\", function() { return userFind; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"userSave\", function() { return userSave; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"userUpdate\", function() { return userUpdate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"userDelete\", function() { return userDelete; });\n/* harmony import */ var _models_users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/users */ \"./src/models/users.js\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _dto_user_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dto/user.dto */ \"./src/dto/user.dto.js\");\n\n\n\n\n\n\nconst saltRounds = 10;\n\nconst userFindAll = () => {\n    return _models_users__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find()\n        .select('_id firstName lastName email username');\n};\n\nconst userFindById = (_id) => {\n    return _models_users__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(_id)\n        .select('_id firstName lastName email');\n};\n\nconst userFind = ({ username, password }) => {\n    return _models_users__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({ username })\n        .then((data) => {\n            if (data.length > 0) {\n                const user = data[0];\n                return bcrypt__WEBPACK_IMPORTED_MODULE_1___default.a.compare(password, user.password)\n                    .then((val) => {\n                        if (val) {\n                            return Object(_dto_user_dto__WEBPACK_IMPORTED_MODULE_3__[\"userDTO\"])(user._doc);\n                        }\n                        throw new Error('unauthorised');\n                    });\n            }\n            throw new Error('unauthorised');\n        });\n};\n\nconst userSave = (data) => {\n    const payload = {\n        ...data,\n        _id: mongoose__WEBPACK_IMPORTED_MODULE_2__[\"Types\"].ObjectId(),\n    };\n    return bcrypt__WEBPACK_IMPORTED_MODULE_1___default.a.hash(payload.password, saltRounds).then((hash) => {\n        const user = new _models_users__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n            ...payload,\n            password: hash,\n        });\n        return user.save()\n            .then((userRecord) => Object(_dto_user_dto__WEBPACK_IMPORTED_MODULE_3__[\"userDTO\"])(userRecord._doc));\n    }).catch((error) => {\n        throw new Error(error);\n    });\n};\n\nconst userUpdate = (_id, userObject) => {\n    return _models_users__WEBPACK_IMPORTED_MODULE_0__[\"default\"].update({ _id }, userObject)\n        .then(() => {\n            return userFindById(_id);\n        });\n};\n\nconst userDelete = (_id) => {\n    return _models_users__WEBPACK_IMPORTED_MODULE_0__[\"default\"].remove({ _id });\n};\n\n\n//# sourceURL=webpack:///./src/dbActions/users.js?");

/***/ }),

/***/ "./src/dto/orders.dto.js":
/*!*******************************!*\
  !*** ./src/dto/orders.dto.js ***!
  \*******************************/
/*! exports provided: orderDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"orderDTO\", function() { return orderDTO; });\nconst orderDTO = (data) => {\n    const response = {\n        ...data,\n    };\n    delete response.createdAt;\n    delete response.updatedAt;\n    delete response.__v;\n    return response;\n};\n\n\n//# sourceURL=webpack:///./src/dto/orders.dto.js?");

/***/ }),

/***/ "./src/dto/user.dto.js":
/*!*****************************!*\
  !*** ./src/dto/user.dto.js ***!
  \*****************************/
/*! exports provided: userDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"userDTO\", function() { return userDTO; });\nconst userDTO = (data) => {\n    const response = {\n        ...data,\n    };\n    delete response.createdAt;\n    delete response.updatedAt;\n    delete response.password;\n    delete response.__v;\n    return response;\n};\n\n\n//# sourceURL=webpack:///./src/dto/user.dto.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n\n\n\n\nconst port = process.env.PORT || 3000;\n\nconst server = http__WEBPACK_IMPORTED_MODULE_0___default.a.createServer(_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\nserver.listen(port);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/models/orders.js":
/*!******************************!*\
  !*** ./src/models/orders.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst orderSchema = Object(mongoose__WEBPACK_IMPORTED_MODULE_0__[\"Schema\"])({\n    _id: mongoose__WEBPACK_IMPORTED_MODULE_0__[\"Types\"].ObjectId,\n    product: {type: Object, ref: 'Product'},\n    quantity: {type: Number, default: 1},\n}, {timestamps: true});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(mongoose__WEBPACK_IMPORTED_MODULE_0__[\"model\"])('Order', orderSchema));\n\n\n//# sourceURL=webpack:///./src/models/orders.js?");

/***/ }),

/***/ "./src/models/products.js":
/*!********************************!*\
  !*** ./src/models/products.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst productSchema = Object(mongoose__WEBPACK_IMPORTED_MODULE_0__[\"Schema\"])({\n    _id: mongoose__WEBPACK_IMPORTED_MODULE_0__[\"Types\"].ObjectId,\n    name: {type: String, required: true},\n    price: {type: Number, required: true},\n    unit: {type: String, required: true},\n    vendor: {type: String},\n    image: {type: String},\n}, {timestamps: true});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(mongoose__WEBPACK_IMPORTED_MODULE_0__[\"model\"])('Product', productSchema));\n\n\n//# sourceURL=webpack:///./src/models/products.js?");

/***/ }),

/***/ "./src/models/users.js":
/*!*****************************!*\
  !*** ./src/models/users.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst userSchema = Object(mongoose__WEBPACK_IMPORTED_MODULE_0__[\"Schema\"])({\n    _id: mongoose__WEBPACK_IMPORTED_MODULE_0__[\"Types\"].ObjectId,\n    firstName: {type: String, required: true},\n    lastName: {type: String, required: true},\n    phoneNo: {type: String},\n    username: {type: String},\n    email: {\n        type: String,\n        required: true,\n        unique: true,\n        match: /^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/,\n    },\n    password: {type: String, required: true},\n}, {timestamps: true});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(mongoose__WEBPACK_IMPORTED_MODULE_0__[\"model\"])('User', userSchema));\n\n\n//# sourceURL=webpack:///./src/models/users.js?");

/***/ }),

/***/ "./src/routes/authenticate.js":
/*!************************************!*\
  !*** ./src/routes/authenticate.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _dbActions_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dbActions/users */ \"./src/dbActions/users.js\");\n/* harmony import */ var _models_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/users */ \"./src/models/users.js\");\n\n\n\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n\nrouter.post('/signup', (req, res, next) => {\n\n    const { body } = req;\n\n    _models_users__WEBPACK_IMPORTED_MODULE_3__[\"default\"].find({ email: body.email }).then((users) => {\n        if (users.length > 0) {\n            res.status(404).json({ message: 'Email already exists' });\n        }\n        const payload = {\n            ...body,\n            username: `${body.firstName}${body.lastName}`,\n        };\n        return Object(_dbActions_users__WEBPACK_IMPORTED_MODULE_2__[\"userSave\"])(payload)\n            .then(result => {\n                res.status(200).json(result);\n            });\n    })\n        .catch(error => {\n            next(error);\n        });\n});\n\nrouter.post('/login', (req, res, next) => {\n\n    const { body } = req;\n\n    Object(_dbActions_users__WEBPACK_IMPORTED_MODULE_2__[\"userFind\"])(body)\n        .then(result => {\n            const token = Object(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__[\"sign\"])(\n                {\n                    email: result.email,\n                    _id: result._id,\n                },\n                process.env.JWT_KEY,\n                {\n                    expiresIn: '1h',\n                }\n            );\n            res.status(200).json({token, ...result});\n        })\n        .catch(error => {\n            next(error);\n        });\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n\n//# sourceURL=webpack:///./src/routes/authenticate.js?");

/***/ }),

/***/ "./src/routes/orders.js":
/*!******************************!*\
  !*** ./src/routes/orders.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _dbActions_orders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dbActions/orders */ \"./src/dbActions/orders.js\");\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n\nrouter.get('/', (req, res, next) => {\n    Object(_dbActions_orders__WEBPACK_IMPORTED_MODULE_1__[\"orderFindAll\"])()\n        .then(result => {\n            res.status(200).json(result);\n        })\n        .catch(error => {\n            next(error);\n        });\n});\n\nrouter.post('/', (req, res, next) => {\n\n    const { body } = req;\n\n    const payload = {\n        ...body,\n        product: body.product._id,\n    };\n    /**\n     * @see\n     * bad practice, used to search product id while\n     * saving and replacing it with product object\n     * right while creating, but seems to be ok if you\n     * don't want to hit database every time you call\n     * the order object\n     */\n    // productFindById(body.product._id)\n    //     .then(product => {\n    //         const payload = {\n    //             _id: Types.ObjectId(),\n    //             ...body,\n    //             product,\n    //         };\n    //         let entity = null;\n    //         if (product) {\n    //             entity = orderSave(payload);\n    //         }\n    //         return entity;\n    //     })\n    //     .then(result => {\n    //         res.status(201).json(result);\n    //     })\n    Object(_dbActions_orders__WEBPACK_IMPORTED_MODULE_1__[\"orderSave\"])(payload)\n        .then(result => {\n            res.status(201).json(result);\n        })\n        .catch(error => {\n            next(error);\n        });\n});\n\nrouter.get('/:orderId', (req, res, next) => {\n    const { params: { orderId } } = req;\n    Object(_dbActions_orders__WEBPACK_IMPORTED_MODULE_1__[\"orderFindById\"])(orderId)\n        .then(result => {\n            res.status(200).json(result);\n        })\n        .catch(error => {\n            res.status(404).json({\n                message: 'Not found',\n            });\n            throw new Error(error);\n        });\n});\n\nrouter.patch('/', (req, res, next) => {\n    const { body } = req;\n\n    const orderObject = {};\n\n    Object.keys(body).forEach(key => {\n        orderObject[`${key}`] = body[key];\n    });\n\n    Object(_dbActions_orders__WEBPACK_IMPORTED_MODULE_1__[\"orderUpdate\"])(body._id, orderObject)\n        .then(result => {\n            Object(_dbActions_orders__WEBPACK_IMPORTED_MODULE_1__[\"orderFindById\"])(body._id).then(data => {\n                res.status(200).json(data);\n            });\n        })\n        .catch(error => {\n            next(error);\n        });\n});\n\nrouter.delete('/:orderId', (req, res, next) => {\n\n    const { params: { orderId } } = req;\n\n    Object(_dbActions_orders__WEBPACK_IMPORTED_MODULE_1__[\"orderDelete\"])(orderId)\n        .then(result => {\n            if (result.deletedCount > 0) {\n                res.status(200).json({\n                    message: 'success',\n                });\n            } else {\n                res.status(404).json({\n                    message: 'Not Found',\n                });\n            }\n        })\n        .catch(error => {\n            res.status(404).json({ error });\n            throw new Error(error);\n        });\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n\n//# sourceURL=webpack:///./src/routes/orders.js?");

/***/ }),

/***/ "./src/routes/products.js":
/*!********************************!*\
  !*** ./src/routes/products.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _dbActions_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dbActions/products */ \"./src/dbActions/products.js\");\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! multer */ \"multer\");\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(multer__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\n\nconst storage = multer__WEBPACK_IMPORTED_MODULE_2___default.a.diskStorage({\n    destination: (req, file, cb) => {\n        cb(null, './images');\n    },\n    filename: (req, file, cb) => {\n        cb(null, `${new Date().toISOString()}-${file.originalname}`);\n    },\n});\n\nconst fileFilter = (req, file, cb) => {\n    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {\n        cb(null, true);\n    } else {\n        cb(new Error('file not valid'), false);\n    }\n};\n\nconst upload = multer__WEBPACK_IMPORTED_MODULE_2___default()({\n    storage,\n    fileFilter,\n    limits: 1024 * 1024 * 5,\n});\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n\nrouter.get('/', (req, res, next) => {\n    Object(_dbActions_products__WEBPACK_IMPORTED_MODULE_1__[\"productFindAll\"])()\n        .then(result => {\n            res.status(200).json(result);\n        })\n        .catch(error => {\n            next(error);\n        });\n});\n\nrouter.post('/', upload.single('image'), (req, res, next) => {\n\n    const { body, file } = req;\n\n    const payload = {\n        ...body,\n        image: file.path,\n    };\n    Object(_dbActions_products__WEBPACK_IMPORTED_MODULE_1__[\"productSave\"])(payload)\n        .then(result => {\n            res.status(201).json(result);\n        })\n        .catch(error => {\n            next(error);\n        });\n});\n\nrouter.get('/:productId', (req, res, next) => {\n    const { params: { productId } } = req;\n    Object(_dbActions_products__WEBPACK_IMPORTED_MODULE_1__[\"productFindById\"])(productId)\n        .then(result => {\n            res.status(200).json(result);\n        })\n        .catch(error => {\n            res.status(404).json({\n                message: 'Not found',\n            });\n            throw new Error(error);\n        });\n});\n\nrouter.patch('/', (req, res, next) => {\n\n    const { body } = req;\n\n    const productObject = {};\n\n    Object.keys(body).forEach(key => {\n        productObject[`${key}`] = body[key];\n    });\n\n    Object(_dbActions_products__WEBPACK_IMPORTED_MODULE_1__[\"productUpdate\"])(body._id, productObject)\n        .then(result => {\n            Object(_dbActions_products__WEBPACK_IMPORTED_MODULE_1__[\"productFindById\"])(body._id).then(data => {\n                res.status(200).json({ data });\n            })\n                .catch(error => {\n                    next(error);\n                });\n        })\n        .catch(error => {\n            next(error);\n        });\n});\n\nrouter.delete('/:productId', (req, res, next) => {\n\n    const { params: { productId } } = req;\n\n    Object(_dbActions_products__WEBPACK_IMPORTED_MODULE_1__[\"productDelete\"])(productId)\n        .then(result => {\n            if (result.deletedCount > 0) {\n                res.status(200).json({\n                    message: 'success',\n                });\n            } else {\n                res.status(404).json({\n                    message: 'Not Found',\n                });\n            }\n        })\n        .catch(error => {\n            res.status(404).json({ error });\n            throw new Error(error);\n        });\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n\n//# sourceURL=webpack:///./src/routes/products.js?");

/***/ }),

/***/ "./src/routes/users.js":
/*!*****************************!*\
  !*** ./src/routes/users.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _dbActions_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dbActions/users */ \"./src/dbActions/users.js\");\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n\nrouter.get('/', (req, res, next) => {\n    Object(_dbActions_users__WEBPACK_IMPORTED_MODULE_1__[\"userFindAll\"])()\n        .then(result => {\n            res.status(200).json(result);\n        })\n        .catch(error => {\n            next(error);\n        });\n});\n\nrouter.post('/', (req, res, next) => {\n\n    const { body } = req;\n\n    const payload = {\n        ...body,\n    };\n    Object(_dbActions_users__WEBPACK_IMPORTED_MODULE_1__[\"userSave\"])(payload)\n        .then(result => {\n            res.status(201).json(result);\n        })\n        .catch(error => {\n            next(error);\n        });\n});\n\nrouter.get('/:userId', (req, res, next) => {\n    const { params: { userId } } = req;\n    Object(_dbActions_users__WEBPACK_IMPORTED_MODULE_1__[\"userFindById\"])(userId)\n        .then(result => {\n            res.status(200).json(result);\n        })\n        .catch(error => {\n            res.status(404).json({\n                message: 'Not found',\n            });\n            throw new Error(error);\n        });\n});\n\nrouter.patch('/', (req, res, next) => {\n\n    const { body } = req;\n\n    const userObject = {};\n\n    Object.keys(body).forEach(key => {\n        userObject[`${key}`] = body[key];\n    });\n\n    Object(_dbActions_users__WEBPACK_IMPORTED_MODULE_1__[\"userUpdate\"])(body._id, userObject)\n        .then(result => {\n            Object(_dbActions_users__WEBPACK_IMPORTED_MODULE_1__[\"userFindById\"])(body._id).then(data => {\n                res.status(200).json({ data });\n            })\n                .catch(error => {\n                    next(error);\n                });\n        })\n        .catch(error => {\n            next(error);\n        });\n});\n\nrouter.delete('/:userId', (req, res, next) => {\n\n    const { params: { userId } } = req;\n\n    Object(_dbActions_users__WEBPACK_IMPORTED_MODULE_1__[\"userDelete\"])(userId)\n        .then(result => {\n            if (result.deletedCount > 0) {\n                res.status(200).json({\n                    message: 'success',\n                });\n            } else {\n                res.status(404).json({\n                    message: 'Not Found',\n                });\n            }\n        })\n        .catch(error => {\n            res.status(404).json({ error });\n            throw new Error(error);\n        });\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n\n//# sourceURL=webpack:///./src/routes/users.js?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt\");\n\n//# sourceURL=webpack:///external_%22bcrypt%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"multer\");\n\n//# sourceURL=webpack:///external_%22multer%22?");

/***/ })

/******/ });