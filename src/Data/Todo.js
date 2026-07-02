import { useState } from 'react';
import { Data } from './data';
import '../../src/index.css';

const Todo = () => {
  const [people, setPeople] = useState(Data);

  const removePerson = (id) => {
    setPeople((currentPeople) =>
      currentPeople.filter((person) => person.id !== id)
    );
  };

  return (
    <main className="birthday-card">
      <h1>{people.length} birthdays today</h1>
      {people.length === 0 ? (
        <p className="empty-message">No birthdays left for today.</p>
      ) : (
        people.map((person) => {
          const { id, name, age, image } = person;

          return (
            <article className="person" key={id}>
              <img src={image} alt={name} />
              <div>
                <h4>{name}</h4>
                <p>{age} years old</p>
              </div>
              <button className="text-btn" onClick={() => removePerson(id)}>
                remove
              </button>
            </article>
          );
        })
      )}
      <button className="btn" onClick={() => setPeople([])}>
        Clear All
      </button>
    </main>
  );
};

export default Todo;
