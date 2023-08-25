import React , {useState , useEffect} from "react";
import fetchProducts from "../../api/fetchProducts"
import ProdutsCard from "../ProdutsCard/ProdutsCard";
import "./Products.css"

function Products() {
    const [produts , setProduts] = useState([])

    useEffect(() => {
        fetchProducts("iphone").then((response) => {
            setProduts(response)
        })
    } , [])
    
    return (
        <section className="produtos glob">
            {
                produts.map((product) => <ProdutsCard key={product.id} data={product}/>)
            }
        </section>
    );
}

export default Products;