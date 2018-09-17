const {home} = require("./controller.js")

function router(app)
{
    app.get("/", home);
    app.post("*", home);
}

module.exports = router;