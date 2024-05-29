import "./App.css";
import HotelCard from "./Components/Cards/Kartica/Kartica";
// import MySentence from "./components/MySentence/MySentence";
// import Greeting from "./components/Greeting/Greeting";
import hotels from "./common/hotels.json";

function App() {
  return (
    // <React.Fragment>
    <div className="app">
      <div className="hotels">
        {hotels.map((hotel) => (
          <HotelCard
            key={hotel.id}
            imageUrl={hotel.imageUrl}
            title={hotel.title}
            content={hotel.content}
            total={hotel.total}
          />
        ))}
      </div>
    </div>
    // </React.Fragment>
  );
}

export default App;
