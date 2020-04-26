const findSmallest = list => {
    let smallestIndex = 0;
    let small = list[smallestIndex];
    for (let i = 1; i < list.length; i += 1) {
        const current = list[i];
        if (current < small) {
            small = current;
            smallestIndex = i;
        }
    }
    return smallestIndex;
}

const sortingChoice = list => {
    let sortedList = [];
    const length = list.length;
    for (let i = 0; i < length; i += 1) {
        const smallestIndex = findSmallest(list);
        sortedList.push(...list.splice(smallestIndex, 1));
    }
    return sortedList;
}

const arr = [5, 3, 90, 4, 5, 1, 123, 12, 43, 551, 55, 1];

console.log({
    sort: sortingChoice(arr),
})