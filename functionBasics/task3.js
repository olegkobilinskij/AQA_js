function checkOrder (available, ordered) {
    if (available < ordered) {
        return "Your order is too large, we don’t have enough goods.";
    } else if (ordered === 0) {
        return "Your order is empty";
    } else {
        return "Your order is accepted";
    }
}
const orderResult = checkOrder(25, 0);
console.log(orderResult);