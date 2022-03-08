import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Tasklist from './components/TodoList';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Tasklist></Tasklist>
    </div>
  );
}

export default App;
