function handleNum (num, handleEven, handleOdd) {
    if (num % 2 === 0) {
        handleEven();
        return;
    }
    handleOdd();
}

function handleEvenNum () {
    console.log("number is even");
}

function handleOddNum () {
    console.log("number is odd");
}

handleNum(0, handleEvenNum, handleOddNum);