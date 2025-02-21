
// auth controller 

export async function Signup(req, res){

try {
    const { email,password,username} = req.body ;
} catch (error) {
    
}}


export async function Login(req, res) { res.send("login page ") };
export async function Logout(req, res) { res.send("logout page ") };