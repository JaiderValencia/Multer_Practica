// natives modules
const fs = require("fs");
const path = require("path");


// data path
const peoplePath = path.join(__dirname, "../data/people.json");


// data import and convert
const people = fs.readFileSync(peoplePath);
const peopleConvert = JSON.parse(people);


// controller
const controller = {
    index: (req, res) => {
        res.render("index", { people: peopleConvert });
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
            avatar: req.body.avatar
        }

        peopleConvert.push(personToPush);

        fs.writeFileSync(peoplePath, JSON.stringify(peopleConvert, null, 2));
        
        res.redirect("/");
    }
};


// export controller
module.exports = controller;