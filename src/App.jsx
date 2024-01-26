import { useState } from 'react';
import palindromeChecker from './palindromeChecker.js';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  function handleChange(e) {
    const inputStr = e.target.value;
    setInput(inputStr);
  }

  const isPalindrome = palindromeChecker(input);

  let output;
  
  switch (isPalindrome) {
    case true:
      output = "It's a palindrome!";
      break;
    case false:
      output = "It's not a palindrome.";
      break;
    default:
      output = '';
  }

  const style = isPalindrome ? { "color" : "#97c389"} : { "color" : "red" };

  return (
    <div className="container">
      <h1>Palindrome Checker</h1>
      <label htmlFor="input" className="input-label"></label>
      <input
        id="input"
        type="text"
        placeholder="Enter a palindrome text..."
        onChange={handleChange}
        value={input}
      />
      <pre id="output" style={style}>
        {output}
      </pre>
      <p>
        Created by{' '}
        <a
          href="https://github.com/christian-go3"
          target="_blank"
          rel="noreferrer"
        >
          christian-go3
        </a>
      </p>
      <p>
        View project @{' '}
        <a
          href="https://github.com/christian-go3/palindrome-checker"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </p>
    </div>
  );
}

export default App;
