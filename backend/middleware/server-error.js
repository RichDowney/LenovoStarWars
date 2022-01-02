import Response from '../models/Response.js'

const serverError = async (err, req, res, next) => {
    // Implement some form of tracking/logging of what causes the error here.
    console.log("500 error occurred");
    return res.status(500).json(new Response(null, 500, true, "Internal Server Error"));
}

export default serverError