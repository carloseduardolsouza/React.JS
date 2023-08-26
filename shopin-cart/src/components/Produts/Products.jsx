import React , { useEffect , useContext} from "react";
import fetchProducts from "../../api/fetchProducts"
import ProdutsCard from "../ProdutsCard/ProdutsCard";
import "./Products.css"
import Loading from "../Loading/Loading";
import AppContext from "../../context/AppConstext";

function Products() {
    const {produts , setProduts ,loading , setloading } = useContext(AppContext)

    useEffect(() => {
        fetchProducts("iphone").then((response) => {
            setProduts(response)
            setloading(false)
        })
    }, [])
    
    return (
        (loading && <Loading /> ) || (
            <section className="produtos glob">
                {produts.map((product) => <ProdutsCard key={product.id} data={product}/>)}
            </section>
        )
    );
}

export default Products;