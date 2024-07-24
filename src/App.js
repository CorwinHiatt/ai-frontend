import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Cool Webpage!</h1>
      </header>
      <div className="text-boxes">
        <input type="text" placeholder="Enter your name" />
        <input type="text" placeholder="Enter your email" />
        <input type="text" placeholder="Enter your message" />
      </div>
      <footer className="App-footer">
        <p>&copy; 2022 My Cool Webpage By Corwin. All rights reserved.</p>
      </footer>
    </div> // Correctly closing the main div here
  );
}

export default App;
