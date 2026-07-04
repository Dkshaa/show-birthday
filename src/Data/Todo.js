import { useState } from 'react';
import { Data } from './data';
import '../../src/index.css';

const Todo = () => {
  const [people, setPeople] = useState(Data);
  const hasBirthdays = people.length > 0;

  const removePerson = (id) => {
    setPeople((currentPeople) =>
      currentPeople.filter((person) => person.id !== id)
    );
  };

  return (
    <main className="birthday-card">
      <h1>{people.length} birthdays today</h1>
      {hasBirthdays ? (
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
      ) : (
        <p className="empty-message">No birthdays left for today.</p>
      )}
      <div className="button-row">
        <button className="btn" onClick={() => setPeople([])}>
          Clear All
        </button>
        <button className="btn secondary-btn" onClick={() => setPeople(Data)}>
          Reset List
        </button>
      </div>
    </main>
  );
};

export default Todo;
