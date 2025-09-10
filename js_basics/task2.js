const firstPersonName = "Oleg";
const secondPersonName = "Max";

const greetingsWithConcatenation = "Congratulations to " + firstPersonName  + " and " + secondPersonName + " on successfully finishing school";
console.log(greetingsWithConcatenation);

const greetingsWithTemplateString = `Congratulations to ${firstPersonName} and ${secondPersonName} on successfully finishing school`;
console.log(greetingsWithTemplateString);