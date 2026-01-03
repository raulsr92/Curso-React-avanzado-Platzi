import { useState } from "react"
import ChildComponent from "./ChildComponent"
import Toggle from "./Toggle"

const ParentComponent = () => {

    const [togglePadre, setTogglePadre] = useState(false)

    return(
        <>
            <h3 >Soy el componente Padre</h3>
 
            <ChildComponent render={(name)=> <p>Soy <span style={{color:"red"}}> {name} </span> y vivo en Perú</p>}/>

            <p>Toogle is {togglePadre ? "Encendido": "Apagado"}</p>

            <Toggle isToggle={togglePadre} onToggle={setTogglePadre}/>   

        </>
    )
}

export default ParentComponent


