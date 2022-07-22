import React from 'react';
import { add, multiply } from '../../utilities/calculate';

const Shoes = () => {
    const first = 55;
    const second = 45;
    const result = multiply(first, second);
    const sum = add(first, second);
    return (
        <div>
            <h2>This is shoes component</h2>
            <p>Result: {result} and Sum: {sum}</p>
        </div>
    );
};

export default Shoes;