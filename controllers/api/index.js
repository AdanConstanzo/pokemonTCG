// our index so we are going to link everything together
// with this file
const router = require("express").Router();

// links our routers to the server.js
router.use(require("./card"));
router.use(require("./sessions"));
router.use(require("./users"));
router.use(require("./set"));
router.use(require("./collection"));
router.use(require("./gif"));
router.use(require("./deckbuilder"));
router.use(require("./pokemon_type"));
router.use(require("./silhouette"));

module.exports = router;
