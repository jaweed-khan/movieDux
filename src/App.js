import logo from './logo.svg';
import './App.css';
import './styles.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">

        <div className='Container'>
            <Header></Header>
        </div>

      <footer className="footer">
          <p className="footer">Footer Content goes here</p>
      </footer>
    </div>
  );
}

export default App;
