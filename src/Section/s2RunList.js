import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

export default function S2RunList() {
  return (
    <div className="s2ProductLine d-flex flex-row justify-content-around">
      <div className="s2ProductLineEl d-flex flex-row justify-content-around">
        <div>
          <img
            className="s2ProductLineImg"
            src="./images/earphone.png"
            alt=""
          />
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <h4>Speakers</h4>
          <p>(6 items)</p>
        </div>
        <button className="s2ProductLineBtn s2ProBtn1 d-flex align-items-center justify-content-center">
          <BsArrowLeft />
        </button>
      </div>

      <div className="s2ProductLineEl d-flex flex-row justify-content-around">
        <div>
          <img className="s2ProductLineImg" src="./images/desktop.png" alt="" />
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <h4>Speakers & laptop</h4>
          <p>(6 items)</p>
        </div>
      </div>

      <div className="s2ProductLineEl d-flex flex-row justify-content-around">
        <div>
          <img
            className="s2ProductLineImg"
            src="./images/cameraSm.png"
            alt=""
          />
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <h4>DSLR camera</h4>
          <p>(6 items)</p>
        </div>
        <button className="s2ProductLineBtn s2ProBtn2 d-flex align-items-center justify-content-center">
          <BsArrowRight />
        </button>
      </div>
    </div>
  );
}
