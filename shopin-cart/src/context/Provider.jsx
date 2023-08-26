import { useState } from "react";
import AppContext from "./AppConstext";
import propTypes from "prop-types"

function Provider({children}) {
    const [produts , setProduts] = useState([])
    const [loading , setloading] = useState(true)

    const valores = {
        produts,
        setProduts,
        loading,
        setloading,
    }

    return (
        <AppContext.Provider value={valores}>
            {children}
        </AppContext.Provider>
    );
}

export default Provider;

Provider.propTypes = {
    children: propTypes.any
}.isRequired