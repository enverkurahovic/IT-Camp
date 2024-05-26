/* eslint-disable react/prop-types */
import "./Kartica.css";
import { LiaHotelSolid } from "react-icons/lia";

function HotelCard(props) {
  return (
    <div className="card">
      <img src={props?.imageUrl} width={270} height={200} />
      <div className="card-title">{props?.title}</div>
      <div className="card-content">{props?.content}</div>
      <div className="card-text">Per Night</div>
      <div className="card-total">Total ${props.total}</div>
      <div className="card-price">
        <LiaHotelSolid className="icon" />
        <p className="button-text">Show Hotel</p>
      </div>
    </div>
  );
}
export default HotelCard;
