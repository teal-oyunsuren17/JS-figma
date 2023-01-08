import { SlLocationPin } from "react-icons/sl";
import { BsTruck } from "react-icons/bs";

export default function Header1() {
    return (
        <div className="d-flex flex-row justify-content-between p-3">

            <span>
            <a href="#">Need help?</a>
            <p className="d-inline">Call us: (+98) 0234 456 789</p>
            </span>

            <div className="d-flex flex-row">

            <div>
                <button> <SlLocationPin/> </button>
                <a href="#">Our store</a>
            </div>

            <div>
                <button> <BsTruck/> </button>
                <a href="#">Track your order</a>
            </div>

            </div>
           
        </div>
    )
}