const add = (first, second) => {
    return first + second;
}
const multiply = (first, second) => {
    return first * second;
}


// const numbers = [23, 64, 848, 46];
// const sumReducer = (previous, current) => previous + current;
// const sum = numbers.reduce(sumReducer, 0);

// const items = [
//     { id: 1, name: 'Alta', price: 100 },
//     { id: 1, name: 'Alta', price: 100 },
//     { id: 1, name: 'Alta', price: 100 },
//     { id: 1, name: 'Alta', price: 100 },
//     { id: 1, name: 'Alta', price: 1100 }
// ];
// const itemSumReducer = (previous, current) => previous + current.price;
// const itemTotal = items.reduce(itemSumReducer, 0);




const getTotalPrice = items => {
    const reducer = (previous, current) => previous + current.price;
    const total = items.reduce(reducer, 0);
    return total;
}


export {
    add,
    multiply,
    getTotalPrice as getTotal
};