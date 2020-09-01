const axios = require("axios");
import { getBackendAddress } from "../utils";

const backendAddress = getBackendAddress()

const API = axios.create({
  baseURL: `http://${backendAddress}:3333`,
});

export default API;
