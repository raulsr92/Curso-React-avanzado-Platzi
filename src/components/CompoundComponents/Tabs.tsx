import { useState } from "react"
import type { ReactElement, ReactNode } from "react";
import React from "react"

interface TabProps {

    label: string;
    children: ReactNode
}

interface TabsProps {

    children: ReactNode
}


const Tabs:React.FC<TabsProps> = ({children})=>{

    const[ activeIndex, setActiveIndex] = useState(0)

    const handleTabClick = (index:number)=>{

        setActiveIndex(index)

    }

    const tabElements = React.Children.toArray(children).filter(

        (child): child is ReactElement<TabProps> => React.isValidElement(child)

    )

    return(
        <>
            <article className="w-[50%] flex flex-col gap-y-4 bg-[#F2F2F2] py-4 rounded-2xl">
                <ul className="flex gap-x-3 justify-center border-b-3 border-[#deeaf4]">
                    {
                        tabElements.map((child, index)=>(
                            <li 
                                key={index}
                                className={
                                    `px-4
                                    ${
                                        index === activeIndex ? "border-b-4 border-[#4262ff] text-[#4262ff] font-bold" : "border-none"
                                    }`
                                } 
                                onClick={()=>{handleTabClick(index)}}
                            >
                                {child.props.label}
                            </li>
                        ))                    
                    } 
                </ul>

                <p className="flex flex-col items-center gap-y-2">
                    {tabElements[activeIndex]}
                </p>

            </article>

        </>
    )
}

export default Tabs