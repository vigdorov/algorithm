const recursionSum = list => {
    if (list.length === 0) {
        return 0;
    }
    if (list.length === 1) {
        return list[0];
    }
    return list.pop() + recursionSum(list);
};

const listLength = list => {
    if (list.length === 0) {
        return 0;
    }
    if (list.length === 1) {
        return 1;
    }
    list.pop();
    return 1 + listLength(list);
};

const maxNumber = list => {
    if (list.length === 0) {
        return 0;
    }
    if (list.length === 1) {
        return list[0];
    }
    const current = list.pop();
    const max = maxNumber(list);
    return current > max ? current : max;
};

const recursionBinarySearch = (list, search) => {
    return function recursion(low, hight) {
        if (hight - low <= 1) {
            if (list[low] === search) {
                return low;
            }
            if (list[hight] === search) {
                return hight;
            } 
            return null;
        }
        const middleIndex = (low + hight) % 2 === 0 ? (low + hight) / 2 : (low + hight - 1) / 2;
        const middleValue = list[middleIndex];
        if (middleValue === search) {
            return middleIndex;
        }
        if (middleValue > search) {
            return recursion(low, middleIndex);
        }
        return recursion(middleIndex, hight);
    }(0, list.length - 1);
};

const quickSort = list => {
    if (list.length <= 1) {
        return list;
    }
    const middleIndex = list.length % 2 === 0 ? list.length / 2 : (list.length - 1) / 2;
    const reference = list[middleIndex];
    const minor = [];
    const major = [];
    for (let i = 0; i < list.length; i += 1) {
        if (i === middleIndex) {
            continue;
        }
        const current = list[i];
        if (reference >= current) {
            minor.push(current);
        } else {
            major.push(current);
        }
    }
    return [].concat(...quickSort(minor), reference, ...quickSort(major));
};
