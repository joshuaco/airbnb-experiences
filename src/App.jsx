import Card from './components/Card';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import data from './data';

import './App.css';

function App() {
  const cards = data.map((data) => {
    return (
      <Card
        key={data.id}
        img={data.coverImg}
        rating={data.stats.rating}
        review={data.stats.reviewCount}
        country='USA'
        title={data.title}
        price={data.price}
        openSpots={data.openSpots}
      />
    );
  });

  return (
    <div className='App'>
      <Navbar></Navbar>
      <Hero></Hero>
      <section className="cards-list">
        {cards}
      </section>
    </div>
  );
}

export default App;
