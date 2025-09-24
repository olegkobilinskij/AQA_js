// function declaration
function calculateRectangleAreaDeclaration (width, height) {
    return  width * height;
}
const rectangleAreaDeclaration = calculateRectangleAreaDeclaration(5,5);
console.log(rectangleAreaDeclaration);

// function expression
const calculateRectangleAreaExpression = function (width, height) {
    return  width * height;
}
const rectangleAreaExpression = calculateRectangleAreaExpression(5,5);
console.log(rectangleAreaExpression);

// arrow function
const calculateRectangleAreaArrow = (width, height) => width * height;

const rectangleAreaArrow = calculateRectangleAreaArrow(5,5);
console.log(rectangleAreaArrow);