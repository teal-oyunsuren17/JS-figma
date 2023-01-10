import { SlLocationPin } from "react-icons/sl";
import { BsTruck } from "react-icons/bs";

export default function HeaderContact() {
  return (
    <div className="headerContact d-flex flex-row justify-content-between">
      <div className="d-flex flex-row align-items-center">
        <a href="#">Need help?</a>
        <p className="mb-0">Call us: (+98) 0234 456 789</p>
      </div>

      <div className="headConBtns d-flex flex-row">
        <div>
          <button>
            <SlLocationPin />
          </button>
          <a href="#">Our store</a>
        </div>

        <div>
          <button>
            <BsTruck />
          </button>
          <a href="#">Track your order</a>
        </div>
      </div>
    </div>
  );
}
