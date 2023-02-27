// native modules
const fs = require("fs")
const path = require("path");

// import and convert the data
const dataPath = path.join(__dirname, "../data/people.json");
const people = fs.readFileSync(dataPath);
const peopleConvert = JSON.parse(people);

const controller = {
    index: (req, res) => {
        res.render("index", { people: peopleConvert })
    },
    createForm: (req, res) => {
        res.render("createPerson");
    },
    create: (req, res) => {
        const personToPush = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            gender: req.body.gender,
            avatar: req.file.filename
        }

        peopleConvert.push(personToPush);

        fs.writeFileSync(dataPath, JSON.stringify(peopleConvert, null, 2));

        res.redirect("/")
    }
};

module.exports = controller;