function countDownRecursively (num) {
    if (num <= 0) {
        console.log(num)
        return;
    }
    console.log(num);
    countDownRecursively(num -1);
}
countDownRecursively(10);