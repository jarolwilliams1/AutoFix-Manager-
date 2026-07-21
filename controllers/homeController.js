
function mostrar (req, res){
    const numero = 24;
    res.render("home", {numero})
    

}

module.exports = {mostrar}