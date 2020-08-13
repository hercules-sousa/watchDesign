const axios = require('axios')

const API = axios.create({
  baseURL: "http://localhost:3333",
})

module.exports = API