import './style.css';
import React from 'react';
import { useState } from 'react';

export default function App() {
  const [userName, setUserName] = useState('');
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (age.trim() && userName.trim() && fullName.trim()) setIsSubmitted(true);
    else setError(true);
  };
  return (
    <div className="App">
      {!error && (
        <form
          className="Form"
          onSubmit={(e) => handleSubmit(e)}
          onClick={() => setIsSubmitted(false)}
        >
          <label htmlFor="userName">UserName</label>
          <input
            id="userName"
            value={userName}
            type="text"
            onChange={(e) => setUserName(e.target.value)}
          />
          <label htmlFor="userName">FullName</label>
          <input
            id="userName"
            value={fullName}
            type="text"
            onChange={(e) => setFullName(e.target.value)}
          />
          <label htmlFor="userName">Age</label>
          <input
            id="userName"
            value={age}
            type="text"
            onChange={(e) => setAge(e.target.value)}
          />
          <button>Submit</button>
        </form>
      )}
      {isSubmitted && (
        <ul>
          <li>UserName: {userName.trim()}</li>
          <li>UserName: {fullName.trim()}</li>
          <li>Age: {age.trim()}</li>
        </ul>
      )}
      {error && (
        <div>
          <h1>Please check your answers</h1>
          <button onClick={() => setError(false)}>OK</button>
        </div>
      )}
    </div>
  );
}
