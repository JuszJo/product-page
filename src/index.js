import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Head from './head';
import Main from './main';

const Index = () => {
    const [itemAmount, setItemAmount] = useState(0)
    const [finalPrice, setFinalPrice] = useState(125)

    const setGlobalStates = (amount, price) => {
        setItemAmount(amount)
        setFinalPrice(price)
    }

  return (
    <div>
        <Head itemAmount={itemAmount} finalPrice={finalPrice} />
        <Main setGlobalStates={setGlobalStates} />
    </div>
    )
}

ReactDOM.render(<Index />, document.getElementById('root'))