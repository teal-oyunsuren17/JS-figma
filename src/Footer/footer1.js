import { RiSendPlaneLine } from "react-icons/ri";
import { FiHeadphones } from "react-icons/fi";

export default function Footer1() {
  return (
    <div>
      <div className="footerStart d-flex flex-row justify-content-evenly">
        <h3>Subscribe newsletter</h3>
        <button>
          Email address <RiSendPlaneLine />
        </button>
        <p>
          <FiHeadphones /> Call us 24/7 : (+62) 0123 567 789
        </p>
      </div>
    </div>
  );
}
