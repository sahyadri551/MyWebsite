const disc = Object.getOwnPropertyDescriptor(Math, 'PI');

// console.log(disc);

const tea = {
    name: "Earl Grey",
    price: 5,
    quantity: 10,
    total: function () {
        return this.price * this.quantity;
    },
    isAvailable: true
}

// console.log(Object.getOwnPropertyDescriptor(tea, 'name'));

Object.defineProperty(tea, 'name', {writable: false,enumerable: false, configurable: false });

// console.log(Object.getOwnPropertyDescriptor(tea, 'name'));

// Now to iterate this object
for (let [key, value] of Object.entries(tea)) {
    if (typeof value === 'function') {
        continue;
    }
    console.log(`${key} => ${value}`);
}