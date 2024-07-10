const express = require("express");

const router = express.Router();

// const { people } = require("../data");

const {
    addPerson,
    getPeople,
    getPerson,
    updatePerson,
    deletePerson,
} = require("../controllers/people.js");

///////////////////////////////////////////////////////////////////
// router.get("/", (req, res) => {
//     res.status(200).json(people);
// });

router.get("/", getPeople);
///////////////////////////////////////////////////////////////////
// router.post("/", (req, res) => {
//     const { name } = req.body;

//     if (name) {
//         people.push({ id: people.length + 1, name: name });

//         // check again
//         // console.log(people);

//         return res.status(201).json({ success: true, name: name });
//     }

//     res.status(400).json({
//         success: false,
//         message: "Please provide a name",
//     });
// });

router.post("/", addPerson);

///////////////////////////////////////////////////////////////////
router.get("/:id", getPerson);

///////////////////////////////////////////////////////////////////
router.put("/:id", updatePerson);

///////////////////////////////////////////////////////////////////
router.delete("/:id", deletePerson);

///////////////////////////////////////////////////////////////////
module.exports = router;
