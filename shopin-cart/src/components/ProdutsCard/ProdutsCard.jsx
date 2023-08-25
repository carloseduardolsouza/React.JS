import FormatCurrency from "../../utils/FormatCurrency";
import "./ProdutsCard.css"
import { BsCartPlus } from "react-icons/bs"

function ProdutsCard({ data }) {
    const {title, price, thumbnail} = data
    return (
        <section className="card">
            <img src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
            alt="produto"
            />

            <div className="content_card">
                <h2>{FormatCurrency(price)}</h2>
                <h3>{title}</h3>
            </div>
            <button className="add_cart"><BsCartPlus /></button>
        </section>
    );
}

export default ProdutsCard;