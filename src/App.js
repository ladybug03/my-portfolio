import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://static.wikia.nocookie.net/disney/images/9/90/Angelina_Jolie.jpg/revision/latest/top-crop/width/360/height/360?cb=20180604002246" className="App-logo" alt="logo" />
        <p>
          My portfolio<br/>Dito ilalagay
        </p>
        <p>Link to my LinkedIn Account</p>
        <a href='https://ph.linkedin.com/in/lady-mae-manuncia-22822598'>View LinkedIn</a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
