import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {fetchTodos} from './redux/slices/todoSlice'

function App() {
  const todos = useSelector(state => state)

  console.log(todos)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>Todos</h1>
      <button onClick={() => dispatch(fetchTodos())}>Fetch todos</button>
    
    </div>
  );
}

export default App;
