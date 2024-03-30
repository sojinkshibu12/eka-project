import { Routes , Route, Navigate } from "react-router-dom"
import App from "./App.jsx"

import Fsrules from "./rules/fsrules.jsx"
import Idears from "./rules/idearules.jsx"
import Mngrrs from "./rules/mngrrs.jsx"
import Voicers from "./rules/voicers.jsx"

const AppRoutes = ()=>{
    return(
        <Routes>
            <Route path = "/" element = {<App></App>} />
            
            <Route path = "/fashionshow" element = {<Fsrules></Fsrules>} />
            <Route path = "/voiceofeka" element = {<Voicers/>} />
            <Route path = "/bestmanager" element = {<Mngrrs></Mngrrs>} />
            <Route path = "/ideathon" element = {<Idears></Idears>} />
            <Route path = "/paperpresentation" element = {<span>paperpresentation</span>} />
            <Route path = "/themedance" element = {<span>themedance</span>} />
            <Route path = "/makethewall" element = {<span>makethewall</span>} />
            <Route path = "*" element = {<Navigate  to = "/"/>}/>

        </Routes>
    )
}

export default AppRoutes;