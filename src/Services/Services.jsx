import "./Services.css";
import card1 from "../assets/card1.png";
import Slider from "../Slider/Slider";
import card2 from "../assets/card2.png"
function Services({showSlider}) {
  return (
    <div>
      { showSlider && <Slider/> }
      <div className="services">
        <div className="heading">
          <span>Our Services</span>
        </div>
        <div className="cardsection">
          <div className="card">
            <img
              src={card1}
              alt="House Construction"
              className="card-img-top"
            />
            <div className="cardbody">
              <h4 className="card-title">High Quality House Construction</h4>
              <p>Price: Rs. 2100 per square feet </p>
              <h4>Free services include :</h4>
              <p>1.Pent House</p>
              <p>2.OutSide Bathroom</p>
              <h4>Materials used :</h4>
              <p>1.UltraTech Cement</p>
              <p>2.Tata Steel</p>
              <p>3.Full Teak wood</p>
              <p>4.Free Maintainence Upto 5 years</p>
            </div>
          </div>
          <div className="card">
            <img
              src={card2}
              alt="House Construction"
              className="card-img-top"
            />
            <div className="cardbody">
              <h4 className="card-title">Medium Quality House Construction</h4>
              <p>Price: Rs. 1900 per square feet </p>
              <h4>Free services include :</h4>
              <p>1.Pent House</p>
              <p>2.Bathroom</p>
              <h4>Materials used :</h4>
              <p>1.UltraTech Cement</p>
              <p>2.Jindal Steel</p>
              <p>3.No teak wood</p>
              <p>4.Free Maintainence</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
