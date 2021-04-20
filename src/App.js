import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { AddThoughtForm } from './components/AddToughtForm';
import { Thought } from './components/Thought';
import { generateId, getNewExpirationTime } from './utilities';

function App() {
  const [thoughts, setThoughts] = useState([
    {
      id: generateId(),
      text: 'This is a place for your passing thoughts.',
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "They'll be removed after 15 seconds.",
      expiresAt: getNewExpirationTime(),
    },
  ]);

    const addThought = (thought) => {
        setThoughts(prevThoughts => [thought, ...prevThoughts])
    }

    const removeThought = (id) => {
        setThoughts((thoughts) => thoughts.filter(e => e.id !== id ))
    }

  return (
    <div className="App">
      <header>
        <h1>Passing Thoughts</h1>
      </header>
      <main>
        <AddThoughtForm addThought={addThought} />
        <ul className="thoughts">
          {thoughts.map((thought) => (
            <Thought key={thought.id} thought={thought} removeThought={removeThought}/>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App
