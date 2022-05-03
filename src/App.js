import './App.css';
import Cards from './components/Cards';
import data from './data'

function App() {
  return (
    <div className="wrapper">
      {data.map(card =>
        <Cards
          key={card.name}
          name={card.name}
          cardText={card.cardText}
          img={card.img}
        />
      )}
    </div>
  );
}

export default App;
