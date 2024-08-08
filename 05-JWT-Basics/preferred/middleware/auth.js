const jwt = require("jsonwebtoken");

// const { UnauthenticatedError } = require("../errors");

//////////////////////////////////////////////////////////////
const authenticationMiddleware = async (req, res, next) => {
    // console.log(req.headers.authorization);
    console.log(req.headers);

    const authHeader = req.headers.authorization;
    // console.log(authHeader.startsWith("Bearer "));

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        // throw new UnauthenticatedError("No token provided!");
        // return res.status(401).json({ msg: "No token provided!" });
        return res.status(401).json({ msg: "Unauthorized!" });
    }

    const token = authHeader.split(" ")[1];
    // console.log(token);

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        console.log(decoded);

        const { id, name } = decoded;

        req.user = { id, name };

        next();
    } catch (error) {
        // throw new UnauthenticatedError("Not authorized to access this route");
        // return res.status(401).json({ msg: "Unauthorized!" });
        return res
            .status(401)
            .json({ msg: "Unauthorized to access this route!" });
    }

    // next();
};

//////////////////////////////////////////////////////////////
module.exports = authenticationMiddleware;
