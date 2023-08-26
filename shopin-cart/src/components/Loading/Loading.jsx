import { AiOutlineLoading3Quarters } from "react-icons/ai"
import "./Loading.css"

function Loading() {
    return (
        <div className="loading">
            <AiOutlineLoading3Quarters className="icon"/>
            <h1>Carregando...</h1>
        </div>
    );
}

export default Loading;