import type React from "react";
import type { JSX } from "react";

type ChildComponentProps = {
    render: (name:string) => JSX.Element;  
};

const ChildComponent: React.FC<ChildComponentProps> = ({render}) => {

    const name = "Raul Sanz"

    return(
        <>
            <section>
                {render(name)}
            </section>
        
        </>
    )
}

export default ChildComponent
