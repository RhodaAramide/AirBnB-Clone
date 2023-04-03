

import './App.css';
import data from './data.js';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import Card from './components/Card.js';

function App() {
  const cards = data.map(item => {
    return (
      <Card 
        key={item.id}
        item={item}
        
      />
    )
  })
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className='cards-list'>
        {cards}
      </section> 
    </div>
  );
}

export default App;
