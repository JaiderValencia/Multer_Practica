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
    }
};


// export controller
module.exports = controller;