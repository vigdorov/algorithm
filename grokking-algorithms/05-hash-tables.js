const Map = function () {
    const store = {};

    this.getStore = function () {
        return store;
    };

    this.get = function (key) {
        return store[key];
    };

    this.set = function (key, data) {
        if (store[key] === undefined) {
            store[key] = data;
        }
    }
}

const HashPrices = function () {
    const productsList = [
        {name: 'apple', price: 5},
        {name: 'milk', price: 9},
        {name: 'beer', price: 12},
    ];

    const hash = {};

    this.getPrice = function (name) {
        if (hash[name] !== undefined) {
            return hash[name];
        }
        const search = productsList.find(product => product.name === name);
        if (search) {
            hash[name] = search.price;
        } else {
            hash[name] = null;
        }
        return hash[name];
    };
}