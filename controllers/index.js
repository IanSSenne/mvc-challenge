const router = require("express").Router();

router.use("/api", require("./api"));
router.use("/", require("./userland"));

module.exports = router;
