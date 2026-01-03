import { useState } from "react";

type ToggleProps ={
    isToggle?: boolean;
    onToggle?: (value:boolean)=> void
}

const Toggle : React.FC<ToggleProps> = ({isToggle= false, onToggle})=> {

    const [toggle, setToggle] = useState(isToggle)

    const fToggle =() =>{

        const newToggle = !toggle
        setToggle(newToggle)

        if(onToggle){
            onToggle(newToggle)
        }
    }

    return(
        <>
            <h3>Esto es un toggle</h3>

            <button onClick={fToggle}>
                {toggle ? "Encendido": "Apagado"}
            </button>
        </>
    )

}

export default Toggle