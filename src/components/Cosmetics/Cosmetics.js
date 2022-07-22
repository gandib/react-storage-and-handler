import React, { useEffect, useState } from 'react';
import { getTotal } from '../../utilities/calculate';
import Cosmetic from '../Cosmetic/Cosmetic';
// import { add } from '../../utilities/calculate';

const Cosmetics = () => {

    // const first = 55;
    // const second = 45;
    // const total = add(first, second);
    // const cosmetics = [
    //     { id: 1, name: 'Alta', price: 100 },
    //     { id: 2, name: 'Snow', price: 200 },
    //     { id: 3, name: 'Powder', price: 300 },
    //     { id: 4, name: 'Cream', price: 400 },
    //     { id: 5, name: 'Kajol', price: 500 }
    // ];

    const [cosmetics, setCosmetics] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCosmetics(data))
    }, []);
    const total = getTotal(cosmetics);

    return (
        <div>
            <h1>Welcome to my Cosmetics store</h1>
            <p>All Products Price: ${total}</p>
            {/* <h2>Total: {total}</h2> */}
            {
                cosmetics.map(cosmetic => <Cosmetic
                    key={cosmetic.id}
                    cosmetic={cosmetic}
                ></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;