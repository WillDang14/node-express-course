const { people } = require("../data");

///////////////////////////////////////////////////////////////
const getPeople = (req, res) => {
    res.status(200).json(people);
};

///////////////////////////////////////////////////////////////
const addPerson = (req, res) => {
    const { name } = req.body;

    if (name) {
        people.push({ id: people.length + 1, name: name });

        // check again
        // console.log(people);

        return res.status(201).json({ success: true, name: name });
    }

    res.status(400).json({
        success: false,
        message: "Please provide a name",
    });
};

///////////////////////////////////////////////////////////////
const getPerson = (req, res) => {
    const id = parseInt(req.params.id);

    const person = people.find((p) => p.id === id);

    if (!person) {
        return res
            .status(404)
            .json({ success: false, message: "That person was not found." });
    }

    return res.status(200).json(person);
};

///////////////////////////////////////////////////////////////
const updatePerson = (req, res) => {
    const id = parseInt(req.params.id);

    const { name } = req.body;

    const person = people.find((person) => person.id === id);

    if (!person) {
        return res
            .status(404)
            .json({ success: false, msg: `no person with id ${id}` });
    }

    const newPeople = people.map((person) => {
        if (person.id === id) {
            person.name = name;
        }

        return person;
    });

    res.status(200).json({ success: true, data: newPeople });
};

///////////////////////////////////////////////////////////////
const deletePerson = (req, res) => {
    const id = parseInt(req.params.id);

    const person = people.find((person) => person.id === id);

    if (!person) {
        return res.status(404).json({
            success: false,
            msg: `no person with id ${req.params.id}`,
        });
    }

    const newPeople = people.filter(
        (person) => person.id !== Number(req.params.id)
    );

    return res.status(200).json({ success: true, data: newPeople });
};
///////////////////////////////////////////////////////////////
module.exports = {
    getPeople,
    addPerson,
    getPerson,
    updatePerson,
    deletePerson,
};
