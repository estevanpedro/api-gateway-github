import { Request, Response } from "express";
import parseLinkHeader from '../utils/parseLinkHeader';

const axios = require('axios');
const CircularJSON = require('circular-json');

const url = 'https://api.github.com';

export const getUserDetails = async function (req: Request, res: Response) {

    if (!req.params.username) {
        return res.status(400).json({
            error: "Github username can not be blank."
        });
    }

    try {
        await axios.get(url + '/users/' + req.params.username,
            {
                headers: {
                    Accept: "application/vnd.github.v3+json"
                },
            }
        )
            .then((response: any) => {
                const str = CircularJSON.stringify(response.data);
                return res.send(JSON.parse(str));
            })
            .catch(function (error: any) {
                console.log(error);

            })
    } catch (err) {
        return res.status(500).send({
            message: err.message
        });
    }
};

export const getUserRepos = async function (req: Request, res: Response) {

    if (!req.params.username) {
        return res.status(400).json({
            error: "Github username can not be blank."
        });
    }

    try {
        await axios.get(url + '/users/' + req.params.username + "/repos",
            {
                params: {
                    type: "all"
                },
                headers: {
                    Accept: "application/vnd.github.nebula-preview+json"
                },
            }
        )
            .then((response: any) => {
                const str = CircularJSON.stringify(response.data);
                return res.send(JSON.parse(str));
            })
            .catch(function (error: any) {
                console.log(error);

            })
    } catch (err) {
        return res.status(500).send({
            message: err.message
        });
    }
};

export const getUserList = async function (req: Request, res: Response) {

    if (!req.query.since) {
        return res.status(400).json({
            error: "Since can not be blank."
        });
    }



    try {
        await axios.get(url + '/users',
            {
                params: {
                    since: "100"
                },
                headers: {
                    Accept: "application/vnd.github.v3+json"
                },
            }
        )
            .then((response: any) => {
                const str = CircularJSON.stringify(response.data);
                const dataToReturn = {
                    users_list: JSON.parse(str, response.headers.link),
                    links: parseLinkHeader(response.headers.link)
                }
                return res.send(dataToReturn);
            })
            .catch(function (error: any) {
                console.log(error);

            })
    } catch (err) {
        return res.status(500).send({
            message: err.message
        });
    }
};