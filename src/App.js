import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <section className="description">
          <p>This project is completely AI-prompted, showcasing the power of modern AI tools in web development. By leveraging AI, we can quickly generate functional and visually appealing components, reducing development time and increasing productivity.</p>
          <p>What makes this project neat is the seamless integration of AI-generated content with traditional coding practices. It demonstrates how AI can assist in various aspects of development, from generating code snippets to designing UI elements, making the development process more efficient and innovative.</p>
        </section>
        <div className="text-boxes">
          <input type="text" placeholder="Enter your name"  />
          <input type="text" placeholder="Enter your email"  />
          <input type="text" placeholder="Enter your message" style={{ width: '300px', height: '100px' }} />
          <button className="button">Submit</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
