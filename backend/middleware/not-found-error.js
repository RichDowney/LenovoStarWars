import Response from '../models/Response.js'

const notFoundError = (req, res) => {
    // Implement some form of tracking/logging of what causes the error here.
    console.log("404 error occurred");
    return res.status(404).json(new Response(null, 404, true, "404 - Route not found"));
}

export default notFoundError