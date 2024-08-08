const jwt = require("jsonwebtoken");

// file "index.js" is read automatically
// const { BadRequestError } = require("../errors");

//////////////////////////////////////////////////////////////
// setup authentication so only the request with JWT can access the dashboard
const logon = async (req, res) => {
    const { name, password } = req.body;

    console.log(req.body);

    if (!name || !password) {
        // throw new CustomAPIError("Please provide email and password", 400);
        // throw new BadRequestError("Please provide email and password");

        return res
            .status(400)
            .json({ msg: "Please provide email and password" });
    }

    const id = new Date().getDate();

    const token = jwt.sign({ id, name }, process.env.JWT_SECRET, {
        expiresIn: "24h",
    });

    // res.status(200).json({ msg: "user created", token });
    res.status(200).json({ token });
};

const hello = async (req, res) => {
    // console.log(req.headers);
    console.log(req.user);

    const luckyNumber = Math.floor(Math.random() * 100); // ramdom Number from 0..99

    res.status(200).json({
        msg: `Hello, ${req.user.name}`,
        randNum: `${luckyNumber}`,
    });
};

//////////////////////////////////////////////////////////////
module.exports = { logon, hello };
