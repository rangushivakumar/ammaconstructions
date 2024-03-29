import "./Services.css";
import card1 from "../assets/card1.png";
import Slider from "../Slider/Slider";
import card2 from "../assets/card2.png";
import school from '../assets/school.png';
import church from '../assets/church.png';
import college from '../assets/college.png';
import mall from '../assets/mall.png';
import apartment from '../assets/apartment.png';
import house from '../assets/house.png';
function Services({showSlider}) {
  return (
    <div>
      { showSlider && <Slider/> }
      <div className="services">
        <div className="heading">
          <span>Our Services</span>
        </div>
        <div className="sercivcecards">
          <span>Amma Construction UnderTakes</span>
          <div className="cards">
            <div>
              <img src={school} alt="school" />
              <p>School</p>
            </div>
            <div>
              <img src={apartment} alt="apartment" />
              <p>Apartment</p>
            </div>
            <div>
              <img src={house} alt="house" />
              <p>House</p>
            </div>
            <div>
              <img src={mall} alt="mall" />
              <p>Mall</p>
            </div>
            <div>
              <img src={church} alt="church" />
              <p>Church</p>
            </div>
            <div>
              <img id='college' src={college} alt="college" />
              <p>College</p>
            </div>
          </div>
        </div>
        <div className="servicecontent">
          <h5><strong>Note : </strong>Owners have the freedom to select preferred companies for plumbing,color,electric wires and ensuring
            personalized choices tailored to their preferences and needs
          </h5>
        </div>
        <div className="cardsection">
          <div className="card">
            <img
              src={card1}
              alt="House Construction"
              className="card-img-top"
            />
            <div className="cardbody">
              <h4 className="card-title">Luxury Living Experience</h4>
              <p>Price: Rs. 2100 per square feet </p>
              <h4>Free services include :</h4>
              <p>1.Metal Sheet Single Room Pent House</p>
              <p>2.Open Bathroom</p>
              <p>3.Bore Upto 150 Feets</p>
              <p>4.Free Maintainence For 5 years</p>
              <p>5.Compound Wall With Gate</p>
              <h4>Materials used :</h4>
              <p>1.UltraTech Cement</p>
              <p>2.Tata Steel</p>
              <p>3.Full Teak wood</p>
      
            </div>
          </div>
          <div className="card">
            <img
              src={card2}
              alt="House Construction"
              className="card-img-top"
            />
            <div className="cardbody">
              <h4 className="card-title">Modern Comfort Living</h4>
              <p>Price: Rs. 1900 per square feet </p>
              <h4>Free services include :</h4>
              <p>1.Bathroom</p>
              <p>2.Bore upto 150 Feets</p>
              <p>3.Compound Wall With Gate</p>
              {/* <p>4.Metal Sheet Single Room Pent House</p> */}
              <p>4.Free Maintainence for 5 years</p>
              <h4>Materials used :</h4>
              <p>1.UltraTech Cement</p>
              <p>2.Jindal Steel</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
