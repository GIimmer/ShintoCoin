module.exports = {
    home: home
}

function home(req,res){
    console.log("hit the root route");
    res.render("index");
}