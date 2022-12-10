import './App.css';
import io  from 'socket.io-client';

function App() {

  const socket = io('http://localhost:4000');

  return (
    <div className="App">
      <h1>APP</h1>
    </div>
  );
};

export default App;
