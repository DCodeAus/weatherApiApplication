#!/usr/bin/env node
const axios = require("axios");

const BASE_PATH = "http://api.openweathermap.org/data/2.5/weather";
const API_KEY = "0aa3cdf4aa391ceaeabcdc6b6e47306c";

const prompt = (message, callback) => {
    const stdin = process.stdin;
    const stdout = process.stdout;

    stdin.resume();
    stdout.write(message);

    stdin.once("data", (data) => {
        callback(data.toString().trim());
    });
};