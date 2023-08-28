import logo from './logo.svg';
import './App.css';

function App() {
  return ( // Layout inspired by https://www.freecodecamp.org/news/build-portfolio-website-react/
    <main> 
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  )



  /*return (
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
    </div>
  );*/ // REACT BOILERPLATE ETC...
}

export default App;
