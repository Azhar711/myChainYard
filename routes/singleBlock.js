var express = require("express");
var router = express.Router();
var callAPI = require("./callAPI");
/* GET users listing. */
router.get("/", function (req, res, next) {
  const { hash } = req.query;
  console.log("Request : ", hash);
  callAPI(
    `https://blockchain.info/rawblock/${hash}`,
    (error, data) => {
      if (error) {
        res.status(404).send("Error Connecting");
        res.status(304).send("Error");
      } else if (data) {
        res.status(200).send(data.body);
      }
    }
  );
});

module.exports = router;
