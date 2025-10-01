function calculateDivision (numerator, denominator) {
    if (typeof (numerator) !== "number") {
        throw new Error('Numerator must be a number');
    }
    if (typeof (denominator) !== "number") {
        throw new Error('Denominator must be a number');
    }
    if (denominator === 0) {
        throw new Error('Denominator must be > 0');
    }
    return numerator / denominator;
}
try {
    calculateDivision(5, 0);
} catch (error) {
    console.log("Error handled", error);
}
try {
    calculateDivision("string", 5);
} catch (error) {
    console.log("Error handled", error);
}
try {
    calculateDivision(5, "hfhf");
} catch (error) {
    console.log("Error handled", error);
} finally {
    console.log("Робота завершена")
}