import Tab from "./Tab"
import Tabs from "./Tabs"

import escudoManchester from "../../assets/escudo-manchester.png";
import escudoInter from "../../assets/escudo-inter.png";
import escudoLisboa from "../../assets/escudo-sportingLisboa.png";

const CompoundComponent = ()=>{
    return(
        <>
            <section className="flex flex-col items-center mt-4 gap-y-3">

                <h1>Tabs de mis equipos favoritos</h1>

                <Tabs>
                    <Tab label="Manchester United">
                        <img src={escudoManchester} alt="" style={{width:"200px"}} />
                    </Tab>

                    <Tab label="Inter de Milán" >
                        <img src={escudoInter} alt="" style={{width:"200px"}} />
                    </Tab>

                    <Tab label="Sporting de Lisboa">
                        <img src={escudoLisboa} alt="" style={{width:"200px"}}/>
                    </Tab>
                </Tabs> 
            </section>
 
        </>
    )
}

export default CompoundComponent
