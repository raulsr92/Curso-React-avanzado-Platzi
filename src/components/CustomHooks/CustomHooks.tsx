
/* Creación de Custom Hook*/

import { useState } from "react"

function useLoading(initialLoading: boolean = false) {

    const [ isLoading, setIsLoading] = useState(initialLoading)
    return{
        isLoading,
        setIsLoading
    }
}

/* FIN de Creación de Custom Hook*/
interface UserProps {
    name: string
}

const UserComponent:React.FC<UserProps>  = ({name}) =>{
    const{isLoading, setIsLoading} = useLoading(false)

    if(isLoading){
        return <p>Loading...</p>
    }
    else{
        return(
            <>
                <div>
                    Bienvenido {name} !
                </div>
                <button onClick={()=>setIsLoading(true)} className="b-1 bg-red-800 rounded-2xl px-[14px] py-[3px] text-white">
                    Simulate Loading
                </button>
            </>
        )
    }
}



export const ParentComponent2 = ()=>{
    return(
        <>
            <UserComponent name="Raúl"/>
        </>
    )
}
