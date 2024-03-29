import { Routes , Route, Navigate } from "react-router-dom"
import App from "./App.jsx"

const AppRoutes = ()=>{
    return(
        <Routes>
            <Route path = "/" element = {<App></App>} />
            
            <Route path = "/fashionshow" element = {<span>fashionshow</span>} />
            <Route path = "/voiceofeka" element = {<span>voiceofeka</span>} />
            <Route path = "/bestmanager" element = {<span>bestmanager</span>} />
            <Route path = "/ideathon" element = {<span>ideathon</span>} />
            <Route path = "/paperpresentation" element = {<span>paperpresentation</span>} />
            <Route path = "/themedance" element = {<span>themedance</span>} />
            <Route path = "/makethewall" element = {<span>makethewall</span>} />
            <Route path = "*" element = {<Navigate  to = "/"/>}/>

        </Routes>
    )
}

export default AppRoutes;