import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import StarBtn from "./starBtn";

export default function S3Tops3Products() {
  return (
    <div className="s3Main">
      <div className="s3header d-flex flex-row justify-content-between ">
        <h2>Popular s3Products</h2>
        <div className="s3HeaderBtns d-flex flex-row">
          <button className="s3TopProList">Cameras</button>
          <button className="s3TopProList">Laptops</button>
          <button className="s3TopProList">Tablets</button>
          <button className="s3TopProList">Mouse</button>
        </div>
      </div>

      <div className="d-flex flex-row flex-wrap justify-content-between">
        <div className="s3Product">
          <img className="s3ProductImg" src="./images/cameraFace.png" alt="" />
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

        <div className="s3Product">
          <img className="s3ProductImg" src="./images/earphoneBig.png" alt="" />
          <button className="heartBtn">
            <AiOutlineHeart />
          </button>
          <div className="d-flex flex-column">
            <h4>Camera</h4>
            <p>$11,70</p>
            <StarBtn />
            <button className="shopBtn">
              <AiOutlineShoppingCart />
            </button>
          </div>
        </div>

        <div className="s3Product">
          <img className="s3ProductImg" src="./images/earphoneBig.png" alt="" />
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

        <div className="s3Product">
          <img className="s3ProductImg" src="./images/game.png" alt="" />
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

        <div className="s3Product">
          <img className="s3ProductImg" src="./images/game.png" alt="" />
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

        <div className="s3Product">
          <img className="s3ProductImg" src="./images/desktop.png" alt="" />
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

        <div className="s3Product">
          <img className="s3ProductImg" src="./images/game.png" alt="" />
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

        <div className="s3Product">
          <img className="s3ProductImg" src="./images/desktop.png" alt="" />
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
