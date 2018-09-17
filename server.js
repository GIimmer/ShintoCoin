const xp = require("express"),
    path = require("path"),
    bp = require("body-parser"),
    router = require("./server/routes.js");

const app = xp();
app.use(xp.static(path.join(__dirname, "/public/dist/public" )))
app.use(bp.json());

router(app);

app.listen(8000, (errs)=>console.log(errs?errs:"gucci"));