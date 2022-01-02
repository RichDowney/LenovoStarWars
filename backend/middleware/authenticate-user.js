import userData from '../static_data/user.js';
import Response from '../models/Response.js';

const authenticate = async (req, res, next) => {
    // check if cookie was sent
    var cookie = req.cookies.lenovoStarWarsLogin;
    if (cookie === undefined) {
        return res.status(401).json(invalidAuthResponse());
    }

    // Would not actually match off of string of token, but use an actual jwt then:
    // 1) Verify token
    // 2) Get user based off of decoded id
    // 3) Run any other auth requirmenets such as a change to user account
    const foundUserData = userData.find(user => user.token == cookie);

    if (!foundUserData) {
        return res.status(401).json(invalidAuthResponse());
    }
    res.locals.userId = foundUserData.id;
    next();
};

const invalidAuthResponse = () => {
    return new Response(null, 401, true, "401 - Invalid Authentication missing token");
}

export default authenticate;
