const {json} = require('express')
const axios = require('axios')
const sinespApi = require('sinesp-api')

module.exports = { 
    // get general informations of a associate
    async getVehicleInfo(req, res) {
        let vehicle = await sinespApi.search('LUZ5566');
        return res.json(vehicle)
    }
}