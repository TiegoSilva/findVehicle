const {json} = require('express')
const axios = require('axios')
const sinespApi = require('sinesp-api')

module.exports = { 
    // get general informations of a associate
    async getVehicleInfo(req, res) {
        const {plate} = req.params;

        let vehicle = await sinespApi.search(plate);
        return res.json(vehicle);
    }
}