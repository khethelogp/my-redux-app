import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { Counter } from './components';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './redux/ducks/user';

function App() {
  const dispatch = useDispatch();

  const users = ['Khethelo', 'Sarah', 'John', 'Kim'];

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const { user } = useSelector((state) => state.user);
  const { count } = useSelector((state) => state.counter);

  console.log('user here: ', user);

  return (
    <div className='App'>
      {user && <h1>Hello, {user.name}</h1>}
      <h1>Redux made easy</h1>
      <h2>The Count: {count}</h2>
      {users.map((user, index) => (
        <Counter key={index} name={user} />
      ))}
    </div>
  );
}

export default App;
