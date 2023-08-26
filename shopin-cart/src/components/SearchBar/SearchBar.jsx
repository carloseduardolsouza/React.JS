import "./SearchBar.css"
import React , { useContext, useState } from "react"
import { FcSearch } from "react-icons/fc"
import fetchProducts from "../../api/fetchProducts"
import AppContext from "../../context/AppConstext"

function SearchBar() {
    const {setProduts , setloading} = useContext(AppContext)
    const [search , setSearch] = useState("")

    const renderSearch = async (event) => {
        event.preventDefault()
        setloading(true)
        const produtos = await fetchProducts(search)
        setloading(false)
        setSearch("")
        setProduts(produtos)
    }

    return (
        <form onSubmit={renderSearch}>
            <input type="search"
            value={search}
            placeholder="Buscar Produtos"
            className="Search_input"
            onChange={({ target }) => setSearch(target.value)}
            required
            />
            <button type="submit" className="Search_button">
                <FcSearch/>
            </button>
        </form>
    )
}

export default SearchBar