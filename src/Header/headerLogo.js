import { BiUser } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function HeaderLogo() {
  return (
    <div className="headLogo d-flex justify-content-between">
      <div className="headLogoStart d-flex flex-row">
        <div className="d-flex align-items-center">
          <img className="logo1" src="./images/logo1.png" />
        </div>
        <div className="headLogoSearch d-flex">
          <input className="headLogoInput" placeholder="Search any things" />
          <button className="headLogoBtn">Search</button>
        </div>
      </div>

      <div className="headLogoIcons d-flex flex-row align-items-center">
        <a href="#">
          <BiUser className="icon" /> Sign in
        </a>

        <div className="d-flex flex-row align-items-center">
          <a href="#">
            <AiOutlineHeart className="icon" />
          </a>
          <div className="headLogoIconNum" id="headHeartIcon">
            0
          </div>
        </div>

        <div className="d-flex flex-row align-items-center">
          <a href="#">
            <AiOutlineShoppingCart className="icon" />
          </a>
          <div className="headLogoIconNum" id="headShopIcon">
            0
          </div>
        </div>
      </div>
    </div>
  );
}
