import React,{useState} from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import './App.css';

const App = () =>  {

  // Variables to input information from user
  const [name,setName] = useState('');
  const [number,setNumber] = useState('');
  const [expiry,setExpiry] = useState('');
  const [cvc,setCvc] = useState('');

  // For focusing on current field
  const [focus,setFocus] = useState('');

  
    return (
      <div className="App">
        <h1>React Credit Cards</h1>

        {/* Cards component to render virtual credit card */}
        <Cards
          cvc={cvc}
          expiry={expiry}
          focused={focus}
          name={name}
          number={number}
        />
        {/* Form for user to input details */}
        <form>
        	<input
            type="tel"
            name="number"
            placeholder="Card Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            onFocus={e => setFocus(e.target.name)}
          />
        	<input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={e => setFocus(e.target.name)}
          />
        	<input
            type="text"
            name="expiry"
            placeholder="MM/YY Expiry"
            value={expiry}
            onChange={e => setExpiry(e.target.value)}
            onFocus={e => setFocus(e.target.name)}
          />
        	<input
            type="tel"
            name="cvc"
            placeholder="CVC"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
            onFocus={e => setFocus(e.target.name)}
          /> 
        </form>
      </div>
    );
  
}
export default App;