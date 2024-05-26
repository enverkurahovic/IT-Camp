import "./Card.css";
// import infoLogo from "../../assets/info.svg";
export function Card() {
  return (
    <div className="card">
      <div className="img">
        <img
          src="https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=414x232&ar=16x9"
          alt="Hotel"
        />
      </div>
      <div className="tekst">
        <p>
          <strong>9.4/10</strong> Exceptional (333 reviews)
        </p>
        <div className="ime">
          <h2>Hotel LAGANINI</h2>
          <p>Novi Pazar</p>
        </div>
        <div className="price">
          <div style={{ display: "flex", alignItems: "center", gap: "0.25em" }}>
            <h2>$500</h2>
            <img src={infoLogo} className="info-logo" />
          </div>
          <p>per night</p>
        </div>
        <div className="button">Member Price available</div>
      </div>
    </div>
  );
}

export default Card;
