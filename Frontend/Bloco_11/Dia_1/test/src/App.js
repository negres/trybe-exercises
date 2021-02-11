import "./App.css";

const tasks = ["Estudar React", "Estudar ES6", "Estudar JEST", "Estudar CSS"];

const App = () => (
  <ul>
    {tasks.map((task) => (
      <li>{task}</li>
    ))}
  </ul>
);

export default App;
