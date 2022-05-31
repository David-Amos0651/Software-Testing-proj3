const express = require('express');
const router = express.Router();
const GradeInput = require("../models/gradeInput");

function find_Average(h1, h2, h3, t1, t2) {
  // console.log((h1+h2+h3)/3);
  // console.log((t1+t2)/2);
  // console.log(((h1+h2+h3)/3)*.2)+(((t1+t2)/2)*.8);
  return Math.round((((h1+h2+h3)/3)*.2)+(((t1+t2)/2)*.8));   // The function returns the product of p1 and p2
}
function findLetter(final){
  if(final >= 92.5 && final <= 100)
    {
        return("Final Grade: A");
    }
    else if(final >= 89.5 && final < 92.5)
    {
        return("Final Grade: A-");
    }
    else if(final >= 86.5 && final < 89.5)
    {
        return("Final Grade: B+");
    }
    else if(final >= 82.5 && final < 86.5)
    {
        return("Final Grade: B");
    }
    else if(final >= 79.5 && final < 82.5)
    {
        return("Final Grade: B-");
    }
    else if(final >= 76.5 && final < 79.5)
    {
        return("Final Grade: C+");
    }
    else if(final >= 72.5 && final < 76.5)
    {
        return("Final Grade: C");
    }
    else if(final >= 69.5 && final < 72.5)
    {
        return("Final Grade: C-");
    }
    else if(final >= 66.5 && final < 69.5)
    {
        return("Final Grade: D+");
    }
    else if(final >= 65.5 && final < 66.5)
    {
        return("Final Grade: D");
    }
    else if(final >= 62.5 && final < 65.5)
    {
        return("Final Grade: D-");
    }
    else if(final < 62.5 && final >= 0)
    {
        return("Final Grade: F");
    }
    else return ("Invalid Grade");
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Courses"}) });

var courses = [
    // {
    //     name: "Test Case 1",
    //     hw1: "90",
    //     hw2: "80",
    //     hw3: "70",
    //     test1: "70",
    //     test2: "70",

    // },
];

// console.log('in homeController pass 1'); 
router.showCourses = (req, res, next) => {
  // res.render("courses", {
  //   allCourses: courses, title: "Course List"
  //   }); 

    GradeInput.find( {}, (error, gradeInputs) => {
    if (error) res.send(error);
    req.data = gradeInputs;
    res.render("courses", {allCourses: req.data});
  });
  
};

// console.log('in homeController pass 2'); 

router.addCourses = (req, res) => {
  // console.log("in homeController addCourses");
  var newcourseName = req.body.name;
  // console.log("name " + newcourseName);
  var newCoursehw1 = req.body.hw1;
  var newCoursehw2 = req.body.hw2;
  var newCoursehw3 = req.body.hw3;
  var newCoursetest1 = req.body.test1;
  var newCoursetest2 = req.body.test2;
  var finalGrade = find_Average(parseFloat(newCoursehw1),parseFloat(newCoursehw2),parseFloat(newCoursehw3),parseFloat(newCoursetest1),parseFloat(newCoursetest2));
  var letterGrade = findLetter(finalGrade);
  // console.log(finalGrade);
  // console.log(letterGrade);
  courses.push({name: newcourseName, hw1: newCoursehw1, hw2: newCoursehw2, hw3: newCoursehw3, test1: newCoursetest1, test2: newCoursetest2, numericGrade: finalGrade, letter: letterGrade}); 
  
  // res.render("courses", {
  //   allCourses: courses
  // }); 
  let newGradeInput = new GradeInput({
    name: req.body.name, 
    hw1: req.body.hw1, 
    hw2: req.body.hw2, 
    hw3: req.body.hw3, 
    test1: req.body.test1, 
    test2: req.body.test2, 
    numericGrade: finalGrade, 
    letter: letterGrade
  });
  newGradeInput.save((error, result) => { 
    if (error) 
    res.send(error);
    res.render("thanks");
    });
};
// console.log('in homeController pass 3'); 

router.getNewCourse = (req, res) => {
  // console.log("in homeController getNewCourse");
  res.render("newcourse", {title: "New Course"}); 
};

module.exports = router;