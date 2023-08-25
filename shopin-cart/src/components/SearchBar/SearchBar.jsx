import "./SearchBar.css"
import React , { useState } from "react"
import { FcSearch } from "react-icons/fc"

function SearchBar() {
    const [search , setSearch] = useState("")
    return (
        <form>
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