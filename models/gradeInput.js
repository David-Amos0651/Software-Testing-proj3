const mongoose = require("mongoose");

const gradeInputSchema = mongoose.Schema({
  name: String, 
  hw1: {type: Number, min: 0, max: 100}, 
  hw2: {type: Number, min: 0, max: 100}, 
  hw3: {type: Number, min: 0, max: 100}, 
  test1: {type: Number, min: 0, max: 100}, 
  test2: {type: Number, min: 0, max: 100}, 
  numericGrade: {type: Number, min: 0, max: 100},
  letter: String
});
const GradeInput = mongoose.model("GradeInput", gradeInputSchema);

// var gradeInput1 = new GradeInput({
//   name: "Pat", 
//   hw1: "Pat", 
//   hw2: "Pat", 
//   hw3: "Pat", 
//   test1: "Pat", 
//   test2: "Pat", 
//   numericGrade: 99, 
//   letter: "Pat"
// });

// gradeInput1.save((error, savedDocument) => {
//   if (error) console.log(error);
//   console.log(savedDocument);
// });

module.exports = mongoose.model("GradeInput", gradeInputSchema);