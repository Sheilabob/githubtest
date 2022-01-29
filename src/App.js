import logo from './logo.svg';
import './App.css';
import FirstTest from './Components/FirstTest';
import CustomAccordion from './Components/CustomAccordion';
import ReactStrapAccordion from './Components/ReactstrapAccordion';
import ReactBootstrapAccordion from './Components/ReactBootstrapAccordion';
import MUIAccordion from './Components/MUIAccordion';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React

        </a>
       
      </header>
      <FirstTest />
          <CustomAccordion />
          <ReactStrapAccordion />
          <ReactBootstrapAccordion />
          <MUIAccordion />
    </div>
  );
}

export default App;
