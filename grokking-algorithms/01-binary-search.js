const getMiddleValueOfRange = (low, hight) => {
    const sum = low + hight;
    const roundedToEven = sum % 2 !== 0 ? sum - 1 : sum;
    return Math.floor(roundedToEven) / 2;
}

const binarySearch = (list, searchItem) => {
    let lowSearchRange = 0;
    let hightSearchRange = list.length - 1;

    while (lowSearchRange <= hightSearchRange) {
        const middleRangeValue = getMiddleValueOfRange(lowSearchRange, hightSearchRange);
        const guessValue = list[middleRangeValue];

        if (guessValue === searchItem) {
            return searchItem;
        }

        if (guessValue > searchItem) {
            hightSearchRange = middleRangeValue - 1;
        } else {
            lowSearchRange = middleRangeValue + 1;
        }        
    }

    return null;
};
