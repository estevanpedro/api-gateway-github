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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserList = exports.getUserRepos = exports.getUserDetails = void 0;
const parseLinkHeader_1 = __importDefault(require("../utils/parseLinkHeader"));
const axios = require('axios');
const CircularJSON = require('circular-json');
const url = 'https://api.github.com';
exports.getUserDetails = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!req.params.username) {
            return res.status(400).json({
                error: "Github username can not be blank."
            });
        }
        try {
            yield axios.get(url + '/users/' + req.params.username, {
                headers: {
                    Accept: "application/vnd.github.v3+json"
                },
            })
                .then((response) => {
                const str = CircularJSON.stringify(response.data);
                return res.send(JSON.parse(str));
            })
                .catch(function (error) {
                console.log(error);
            });
        }
        catch (err) {
            return res.status(500).send({
                message: err.message
            });
        }
    });
};
exports.getUserRepos = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!req.params.username) {
            return res.status(400).json({
                error: "Github username can not be blank."
            });
        }
        try {
            yield axios.get(url + '/users/' + req.params.username + "/repos", {
                params: {
                    type: "all"
                },
                headers: {
                    Accept: "application/vnd.github.nebula-preview+json"
                },
            })
                .then((response) => {
                const str = CircularJSON.stringify(response.data);
                return res.send(JSON.parse(str));
            })
                .catch(function (error) {
                console.log(error);
            });
        }
        catch (err) {
            return res.status(500).send({
                message: err.message
            });
        }
    });
};
exports.getUserList = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!req.query.since) {
            return res.status(400).json({
                error: "Since can not be blank."
            });
        }
        try {
            yield axios.get(url + '/users', {
                params: {
                    since: "100"
                },
                headers: {
                    Accept: "application/vnd.github.v3+json"
                },
            })
                .then((response) => {
                const str = CircularJSON.stringify(response.data);
                const dataToReturn = {
                    users_list: JSON.parse(str, response.headers.link),
                    links: parseLinkHeader_1.default(response.headers.link)
                };
                return res.send(dataToReturn);
            })
                .catch(function (error) {
                console.log(error);
            });
        }
        catch (err) {
            return res.status(500).send({
                message: err.message
            });
        }
    });
};
