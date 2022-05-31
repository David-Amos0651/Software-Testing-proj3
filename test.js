const assert = require('assert');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(
    "mongodb://localhost:27017/gradeCalculator",
    {useNewUrlParser: true}
  );
const db = mongoose.connection;
db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
  });
const home = require('./controllers/homeController.js');
const GradeInput = require('./models/gradeInput.js');

//beforeEach((done) => {
  //  db.connection.gradeCalculator.gradeinputs.drop(() => {
   // done();
  // });
//});

let newGradeInput

describe('Creating documents in MongoDB', () => {
    it('Creates a New GradeInput (Should Pass)', (done) => {
        const newGradeInput = new GradeInput({ name: "David Amos", hw1: 100, hw2: 100, hw3: 100, test1: 100, test2: 100, numericGrade: 100, letter: "Final Grade: A" });
        newGradeInput.save() // returns a promise after some time
            .then(() => {
                //if the newGradeInput is saved in db and it is not new
                assert(!newGradeInput.isNew);
                done();
            });
    });
    it('Creates a New GradeInput (Should Pass)', (done) => {
        const newGradeInput = new GradeInput({ name: "John Smith", hw1: 0, hw2: 0, hw3: 0, test1: 0, test2: 0, numericGrade: 0, letter: "Final Grade: F" });
        newGradeInput.save() // returns a promise after some time
            .then(() => {
                //if the newGradeInput is saved in db and it is not new
                assert(!newGradeInput.isNew);
                done();
            });
    });
    it('Creates a New GradeInput (Should Pass)', (done) => {
        const newGradeInput = new GradeInput({ name: "Christina Amos", hw1: 79, hw2: 96, hw3: 90, test1: 80, test2: 94, numericGrade: 87, letter: "Final Grade: B+" });
        newGradeInput.save() // returns a promise after some time
            .then(() => {
                //if the newGradeInput is saved in db and it is not new
                assert(!newGradeInput.isNew);
                done();
            });
    });
    it('Creates a New GradeInput (Should Fail)', (done) => {
      const newGradeInput = new GradeInput({ name: "Jarrod LoStracco", hw1: 87, hw2: 97, hw3: 40, test1: 'Hello', test2: 93, letter: "Invalid Grade" });
      newGradeInput.save() // returns a promise after some time
          .then(() => {
              //if the newGradeInput is saved in db and it is not new
              assert(!newGradeInput.isNew);
              done();
          });
    });
    it('Creates a New GradeInput (Should Fail)', (done) => {
      const newGradeInput = new GradeInput({ name: "Devin Furlow", hw1: -1, hw2: 100, hw3: 100, test1: 100, test2: 100, letter: "Invalid Grade" });
      newGradeInput.save() // returns a promise after some time
          .then(() => {
              //if the newGradeInput is saved in db and it is not new
              assert(!newGradeInput.isNew);
              done();
          });
    });
});

describe('Reading entries of GradeInput', () => {
  it('Finds newGradeInput with the name David Amos (Should Pass)', (done) => {
      GradeInput.findOne({ name: "David Amos" })
          .then((newGradeInput) => {
              assert(newGradeInput.name === "David Amos");
              done();
          });
  })
  it('Finds newGradeInput with the name John Smith with a final grade of F (Should Pass)', (done) => {
      GradeInput.findOne({ name: "John Smith"})
          .then((newGradeInput) => {
              assert(newGradeInput.name === "John Smith" && newGradeInput.letter === "Final Grade: F");
              done();
          });
  })
  it('Finds newGradeInput with the name Christina Amos and with a hw3: 90 (Should Pass)', (done) => {
      GradeInput.findOne({ name: "Christina Amos" })
          .then((newGradeInput) => {
              assert(newGradeInput.name === "Christina Amos" && newGradeInput.hw3 === 90);
              done();
          });
  })
  it('Finds newGradeInput with the name: David Amos with a test1: 80 (Should Fail)', (done) => {
      GradeInput.findOne({ name: "David Amos" })
          .then((newGradeInput) => {
              assert(newGradeInput.name === "David Amos" && newGradeInput.test1 === 80);
              done();
          });
  })
  it('Finds newGradeInput with the name Will Smith with a final grade of B (Should Fail)', (done) => {
      GradeInput.findOne({ name: "Will Smith" })
          .then((newGradeInput) => {
              assert(newGradeInput.name === "Will Smith" && newGradeInput.final === "Final Grade: B");
              done();
          });
  })
});