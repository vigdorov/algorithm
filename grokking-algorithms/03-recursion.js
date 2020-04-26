const countDown = n => {
    if (n <= -1) {
        return;
    }
    console.log(n);
    return countDown(n - 1);
};

const factorial = n => {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
