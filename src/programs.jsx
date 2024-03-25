import "./styles/program.css"
import gworypic from "./img/gowry.jpg"
import baby from "./img/baby.jpg"
const Programs = ()=>{

    return(
        <div className="maincontainer" id="programs">
            <div className="subcontainer">


                <div className="persons">
                    <div className="person1">
                        <img  className = "image1"src="" alt="one" />
                        <div className="blackbar">
                            <h1 className="name">Gowry Lekshmi</h1>
                        </div>
                    </div>


                    <div className="person2">
                    <img  className = "image1"src="" alt="two" />
                        <div className="blackbar">
                            <h1 className="name">Baby Jean</h1>
                        </div>
                    </div>
                </div>

                    <div className="background-text">

                        <div className="first">
                            <div className="outline">BabyJean </div>
                            <div className="gowry">GowryLekshmi</div>
                            <div className="baby">BabyJean </div>
                            <div className="outline">GowryLekshmi</div>
                            <div className="baby">BabyJean </div>
                            <div className="outline">GowryLekshmi</div>
                        </div>
                        
                        <div className="first">
                            <div className="baby">BabyJean </div>
                            <div className="outline">GowryLekshmi</div>
                            <div className="baby">BabyJean </div>
                            <div className="gowry">GowryLekshmi</div>
                            <div className="outline">BabyJean </div>
                            <div className="gowry">GowryLekshmi</div>
                        </div>
                    </div>
                    <div className="background-text1">

                        <div className="first">
                            <div className="baby">BabyJean </div>
                            <div className="outline">GowryLekshmi</div>
                            <div className="outline">BabyJean </div>
                            <div className="gowry">GowryLekshmi</div>
                            <div className="outline">BabyJean </div>
                            <div className="gowry">GowryLekshmi</div>
                        </div>
                        
                        <div className="first">
                            <div className="outline">BabyJean </div>
                            <div className="gowry">GowryLekshmi</div>
                            <div className="outline">BabyJean </div>
                            <div className="gowry">GowryLekshmi</div>
                            <div className="outline">BabyJean </div>
                            <div className="gowry">GowryLekshmi</div>
                        </div>
                    </div>
                
            </div>
            




        </div>
    );
}

export default Programs;