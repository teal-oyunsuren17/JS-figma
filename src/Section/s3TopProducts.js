import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import StarBtn from "./starBtn";

export default function S3TopProducts() {
  return (
    <div>
      <div className="s3header d-flex flex-row justify-content-between ">
        <h2>Popular products</h2>
        <div className="s3HeaderBtns d-flex flex-row">
          <button className="topProList">Cameras</button>
          <button className="topProList">Laptops</button>
          <button className="topProList">Tablets</button>
          <button className="topProList">Mouse</button>
        </div>
      </div>

      <div className="d-flex flex-row flex-wrap justify-content-around">
        <div className="product">
          <img src="./images/cameraFace.png" alt="" />
          <button className="heartBtn">
            <AiOutlineHeart />
          </button>
          <h4>Camera</h4>
          <p>$11,70</p>
          <StarBtn />
          <button className="shopBtn">
            <AiOutlineShoppingCart />
          </button>
        </div>

        <div className="product">
          <img src="./images/earphoneBig.png" alt="" />
          <button className="heartBtn">
            <AiOutlineHeart />
          </button>
          <h4>Camera</h4>
          <p>$11,70</p>
          <StarBtn />
          <button className="shopBtn">
            <AiOutlineShoppingCart />
          </button>
        </div>

        <div className="product">
          <img src="./images/earphoneBig.png" alt="" />
          <button className="heartBtn">
            <AiOutlineHeart />
          </button>
          <h4>Camera</h4>
          <p>$11,70</p>
          <StarBtn />
          <button className="shopBtn">
            <AiOutlineShoppingCart />
          </button>
        </div>

        <div className="product">
          <img src="./images/game.png" alt="" />
          <button className="heartBtn">
            <AiOutlineHeart />
          </button>
          <h4>Camera</h4>
          <p>$11,70</p>
          <StarBtn />
          <button className="shopBtn">
            <AiOutlineShoppingCart />
          </button>
        </div>

        <div className="product">
          <img src="./images/game.png" alt="" />
          <button className="heartBtn">
            <AiOutlineHeart />
          </button>
          <h4>Camera</h4>
          <p>$11,70</p>
          <StarBtn />
          <button className="shopBtn">
            <AiOutlineShoppingCart />
          </button>
        </div>

        <div className="product">
          <img src="./images/desktop.png" alt="" />
          <button className="heartBtn">
            <AiOutlineHeart />
          </button>
          <h4>Camera</h4>
          <p>$11,70</p>
          <StarBtn />
          <button className="shopBtn">
            <AiOutlineShoppingCart />
          </button>
        </div>

        <div className="product">
          <img src="./images/game.png" alt="" />
          <button className="heartBtn">
            <AiOutlineHeart />
          </button>
          <h4>Camera</h4>
          <p>$11,70</p>
          <StarBtn />
          <button className="shopBtn">
            <AiOutlineShoppingCart />
          </button>
        </div>

        <div className="product">
          <img src="./images/desktop.png" alt="" />
          <button className="heartBtn">
            <AiOutlineHeart />
          </button>
          <h4>Camera</h4>
          <p>$11,70</p>
          <StarBtn />
          <button className="shopBtn">
            <AiOutlineShoppingCart />
          </button>
        </div>
      </div>
      <div className="nextBtns">
        <button id="nextBtn"></button>
        <button id="nextBtn"></button>
        <button id="nextBtn"></button>
      </div>
    </div>
  );
}
