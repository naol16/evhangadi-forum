function register(req,res){
    res.send("hello telbaw");
}
function login(req,res){
    res.send("log in");
}
function checked (req,res){
    res.send("checked");
}
module.exports={register,login,checked}