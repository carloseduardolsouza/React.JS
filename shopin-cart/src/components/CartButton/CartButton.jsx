import {AiOutlineShoppingCart} from "react-icons/ai"
import "./CartButton.css"

function CartButton() {
    return ( 
        <button className="cart">
            <AiOutlineShoppingCart />
            <span>1</span>
        </button>
     );
}

export default CartButton;