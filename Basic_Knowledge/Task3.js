function digitalRoot(number) {
    while (number >= 10)
    {
        let digitsAmount = Math.log10(number) + 1;
        let nextNumber = 0;
        for (let i = 0; i < digitsAmount; i++)
        {
            nextNumber += Math.floor(number % 10);
            number /= 10;
        }

        number = nextNumber;
    }

    return number;
}

console.log(digitalRoot(16));
console.log(digitalRoot(942));
console.log(digitalRoot(132189));