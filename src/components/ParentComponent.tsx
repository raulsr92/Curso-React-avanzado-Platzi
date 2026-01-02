import ChildComponent from "./ChildComponent"

const ParentComponent = () => {
    return(
        <>
            <h3 >Soy el componente Padre</h3>
 
            <ChildComponent render={(name)=> <p>Soy <span style={{color:"red"}}> {name} </span> y vivo en Perú</p>}/>
        
        </>
    )
}

export default ParentComponent


