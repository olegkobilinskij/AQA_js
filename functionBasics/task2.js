function isPersonAdult (age) {
    return age >= 18;
}
const isAdult = isPersonAdult(17);
console.log(isAdult ? "Особа доросла" : "Особа не доросла");