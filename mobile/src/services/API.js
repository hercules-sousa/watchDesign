const axios = require("axios");
import { getLocalHost } from "../utils";

const localHost = getLocalHost();

const API = axios.create({
  baseURL: `http://${localHost}:3333`,
});

export default API;
