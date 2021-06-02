module.exports = async function(req, res, next) {
    var authHeader = req.headers.authorization;
    if(!authHeader){
        res.sendStatus(401); 
    }else{
        next();
    }
        
    
}