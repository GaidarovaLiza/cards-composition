import './App.css';
import CatsWrapper from './components/CatsWrapper';
import data from './data'

function App() {
  return (
    <div className="wrapper">
      {data.map(card =>
        <CatsWrapper
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
