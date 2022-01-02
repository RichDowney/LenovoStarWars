import userData from '../static_data/user.js';
import Response from '../models/Response.js';
import User from '../models/User.js';

const login = async (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
        return res.status(400).json(new Response(null, 400, true, "400 - Bad Request, missing require field(s) email, password"));
    }

    // await is here to act as though we are getting data via a db connection
    const foundUserData = await userData.find(user => user.email == email);
  
    if (!foundUserData) {
        return res.status(401).json(new Response(null, 401, true, "401 - Invalid Credentials"));
    }

    const user = new User(foundUserData);
    const isPasswordCorrect = await user.comparePassword(password);

    if (!isPasswordCorrect) {
        return res.status(401).json(new Response(null, 401, true, "401 - Invalid Credentials"));
    }

    res.cookie('lenovoStarWarsLogin', user.token, {maxAge: 30000000});
  
    return res.status(204).send();
};
  
const logout = async (req, res) => {
    res.clearCookie('lenovoStarWarsLogin');
    return res.status(204).send();
};
  
export {
    login,
    logout
};