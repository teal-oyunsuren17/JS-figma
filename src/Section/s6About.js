import { TbMailbox } from "react-icons/tb";
import { FaCrown } from "react-icons/fa";
import { RiDoorLockBoxLine } from "react-icons/ri";

export default function S6About() {
  return (
    <div className="sec6">
      <div className="d-flex flex-row">
        <span className="logoIcon">
          <TbMailbox />
        </span>
        <div>
          <h4>Free delivery</h4>
          <p>on order above $50,00</p>
        </div>
      </div>
      <div className="d-flex flex-row">
        <span className="logoIcon">
          <FaCrown />
        </span>
        <div>
          <h4>Best quality</h4>
          <p>best quality</p>
        </div>
      </div>
      <div className="d-flex flex-row">
        <span className="logoIcon">
          <RiDoorLockBoxLine />
        </span>
        <div>
          <h4>1 year warranty</h4>
          <p>Available warranty</p>
        </div>
      </div>
    </div>
  );
}
