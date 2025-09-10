function discount(totalAmount) {
    // 👇 using ternary operator here would be nice
    if (totalAmount > 100) {
        return totalAmount * 0.1;
    }
    return totalAmount * 0.05;
}
