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
      output = 'Enter a palindrome text...';
  }

  return (
    <div className="container">
      <h1>Palindrome Checker</h1>
      <label htmlFor="input" className="input-label">
        Input:
      </label>
      <input
        id="input"
        type="text"
        placeholder="Enter a palindrome text..."
        onChange={handleChange}
        value={input}
      />
      <label htmlFor="output" className="output-label">
        Output:
      </label>
      <pre id="output">&gt;&gt; {output}</pre>
    </div>
  );
}

export default App;
