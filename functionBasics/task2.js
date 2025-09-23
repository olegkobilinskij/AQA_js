function checkAge (age) {
    return age >= 18;
}
const isAdult = checkAge(19);
console.log(isAdult ? "Особа доросла" : "Особа не доросла");