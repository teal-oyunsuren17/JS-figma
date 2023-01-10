import StarBtn from "./starBtn";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function S5See3Product() {
  return (
    <div className="d-flex flex-row">
      <div className="d-flex flex-row align-items-center">
        <img src="./images/speaker.png" alt="" />
        <div>
          <h4>JBL bar 2.1 deep bass</h4>
          <p>$11,70</p>
          <StarBtn />
          <button>
            Add to cart
            <AiOutlineShoppingCart />
          </button>
        </div>
      </div>

      <div>
        <div className="d-flex flex-row align-items-center">
          <img src="./images/game2.png" alt="" />
          <div>
            <h4>Play game</h4>
            <p>$11,70</p>
            <StarBtn />
          </div>
        </div>
        <div className="d-flex flex-row align-items-center">
          <img src="./images/desktop.png" alt="" />
          <div>
            <h4>Play game</h4>
            <p>$11,70</p>
            <StarBtn />
          </div>
        </div>
      </div>
    </div>
  );
}
