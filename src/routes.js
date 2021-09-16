const express = require('express');
const { response } = require('express');
const router = express.Router();


// import controllers
const getPlaca = require('./controllers/Placa');


router.get('/', (req, res) => {
  return res.json({
      "status": "success",
      "message": "http://localhost:3000/"
  })
});

router.get('/vehicle/:plate', getPlaca.getVehicleInfo)


module.exports = router;