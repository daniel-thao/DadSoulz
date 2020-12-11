const router = require("express").Router();


router.use("/api/user", require("./user"));
module.exports = router;
// module.exports = {
//   User: require("./user"),
// };
