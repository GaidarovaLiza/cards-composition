import './App.css';
import Cat from './components/Cat';
import data from './data'

function App() {
  return (
    <div className="wrapper">
      {data.map(card =>
        <Cat
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
