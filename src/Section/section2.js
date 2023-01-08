import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

export default function Section2() {
  return (
    <div className="productLine d-flex flex-row justify-content-around">
      <div className="productLineEl">
        <div>
          <img src="./images/earphone.png" alt="" />
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <h4>Speakers</h4>
          <p>(6 items)</p>
        </div>
      </div>

      <div className="productLineEl">
        <div>
          <img src="./images/desktop.png" alt="" />
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <h4>Speakers</h4>
          <p>(6 items)</p>
        </div>
      </div>

      <div className="productLineEl">
        <div>
          <img src="./images/cameraSm.png" alt="" />
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <h4>Speakers</h4>
          <p>(6 items)</p>
        </div>
      </div>
      <button className="productLineBtn proBtn1">
        {" "}
        <BsArrowLeft />{" "}
      </button>
      <button className="productLineBtn proBtn2">
        {" "}
        <BsArrowRight />{" "}
      </button>
    </div>
  );
}
