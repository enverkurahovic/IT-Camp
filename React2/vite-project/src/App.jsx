import "./App.css";
import HotelCard from "./Components/Cards/Kartica/Kartica";
// import MySentence from "./components/MySentence/MySentence";
// import Greeting from "./components/Greeting/Greeting";

function App() {
  return (
    // <React.Fragment>
    <>
      <div className="hotels">
        <HotelCard
          imageUrl="https://www.kayak.co.uk/news/wp-content/uploads/sites/5/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3-1640x1312.jpg"
          title="KAYAK"
          content={
            <>
              $174 <del>$369</del>
            </>
          }
          total={450}
        />
        <HotelCard
          imageUrl="https://cf.bstatic.com/xdata/images/hotel/max1024x768/273076792.jpg?k=5cb683ba5db555146e2a471941e7fdecf7eb86754f97c11e45e683004d70e19a&o=&hp=1"
          title="VRBAK"
          content={
            <>
              $40 <del>$60</del>
            </>
          }
          total={160}
        />
        <HotelCard
          imageUrl="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/c3/ef/fb/hotel-tadz.jpg?w=1200&h=-1&s=1"
          title="TADZ"
          content={
            <>
              $40 <del>$60</del>
            </>
          }
          total={160}
        />
        <HotelCard
          imageUrl="https://cf.bstatic.com/xdata/images/hotel/max1024x768/117762388.jpg?k=5eb8aaf5892b94a927493e5f7cf09c082c2a31e7bb7f49af6b4a7c1cff6f1689&o=&hp=1"
          title="PALMA"
          content={
            <>
              $40 <del>$60</del>
            </>
          }
          total={160}
        />
        <HotelCard
          imageUrl="https://www.serbia.travel/files/Smestaj/NP-hotel-Atlas-2016-08-20-01-1024x681-1-720x400.jpg"
          title="ATLAS"
          content={
            <>
              $40 <del>$60</del>
            </>
          }
          total={160}
        />
        <HotelCard
          imageUrl="https://cf.bstatic.com/xdata/images/hotel/max1024x768/538185613.jpg?k=3c4141932d2719291ba8fc25deedfb001903be1cc0ffa3ffc67fde54a4c5a675&o=&hp=1"
          title="IDEAL"
          content={
            <>
              $40 <del>$60</del>
            </>
          }
          total={160}
        />
        <HotelCard
          imageUrl="https://cf.bstatic.com/xdata/images/hotel/max1024x768/480489392.jpg?k=996012741f95bf72ac5c38e35d1caa3134b648b263ef8131dddd37672fd429ff&o=&hp=1"
          title="M STAR"
          content={
            <>
              $40 <del>$60</del>
            </>
          }
          total={160}
        />
      </div>
    </>
    // </React.Fragment>
  );
}

export default App;
