import React, { Component } from 'react';


import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:11000/",
});
api.defaults.withCredentials = true;

export default api;