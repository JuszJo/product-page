import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Head from './head';
import Main from './main';


const Index = () => {
  var [state, setState] = useState(0)
  var [state2, setState2] = useState(125)
  
  var bro = (data, data2) => {
    setState(data)
    setState2(data2)
  }

  return(
    <div>
      <Head val={state} val2={state2} />
      <Main val={bro} />
    </div>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'))