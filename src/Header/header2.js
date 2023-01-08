import { BiUser } from "react-icons/bi";
import { AiOutlineHeart} from "react-icons/ai";
import { AiOutlineShoppingCart} from "react-icons/ai";

export default function Header2() {
    return (
        <div className="header2 d-flex justify-content-between p-3">

            <div>
            <img className="logo1" src="./images/logo1.png"/>
            <input/>
            <button>search</button>
            </div>

            <div>
                <a href="#"> <BiUser/> Sign in</a>
                <a href="#"> <AiOutlineHeart/> </a>
                <a href="#"> <AiOutlineShoppingCart/> </a>
            </div>
        </div>
    )
}