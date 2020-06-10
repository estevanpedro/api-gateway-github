"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserData = void 0;
const axios = require('axios');
const url = 'https://api.github.com';
exports.getUserData = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log('getUserData Called');
            const userData = axios.get(url + '/users/estevanpedro')
                .then(function (response) {
                console.log('userData: ', response);
                return response;
            })
                .catch(function (error) {
                console.log(error);
            })
                .finally(function () {
                // always executed
            });
            return res.send(userData);
        }
        catch (err) {
            return res.status(500).send({
                message: err.message
            });
        }
    });
};
