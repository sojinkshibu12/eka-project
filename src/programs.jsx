import "./styles/program.css"
import prg1 from "./img/THAMARA1 (1).webp"
import prg2 from "./img/FEJOO100.webp"
const Programs = ()=>{

    return(
        <div className="maincontainer" id="programs">
            <div className="subcontainer">


                <div className="persons">
                    <div className="person1">
                        <img  className = "image1"src={prg1} alt="one" />

                    </div>


                    <div className="person2">
                    <img  className = "image1"src={prg2} alt="two" />

                    </div>
                </div>


                <div className="backgroundmain">

                            <div className="background-text">
                            <div className="first">
                                <div className="outline">Sanjay</div>
                                <div className="gowry">Fejo</div>
                                <div className="baby">ThamarasseryChuram</div>
                                <div className="outline">LILPAYYAN</div>
                                <div className="baby">Fejo</div>
                                <div className="outline">ThamarasseryChuram</div>
                            </div>
                            <div className="first">
                                <div className="baby">Sanjay</div>
                                <div className="outline">ThamarasseryChuram</div>
                                <div className="baby">LILPAYYAN</div>
                                <div className="gowry">ThamarasseryChuram</div>
                                <div className="outline">Adarshadj</div>
                                <div className="gowry">ThamarasseryChuram</div>
                            </div>
                            </div>
                            <div className="background-text1">
                            <div className="first">
                                <div className="baby">LILPAYYAN</div>
                                <div className="outline">ThamarasseryChuram</div>
                                <div className="outline">Sanjay</div>
                                <div className="gowry">ThamarasseryChuram</div>
                                <div className="outline">Adarshadj</div>
                                <div className="gowry">ThamarasseryChuram</div>
                            </div>
                            <div className="first">
                                <div className="outline">LILPAYYAN</div>
                                <div className="gowry">ThamarasseryChuram</div>
                                <div className="outline">Sanjay</div>
                                <div className="gowry">ThamarasseryChuram</div>
                                <div className="outline">Fejo</div>
                                <div className="gowry">ThamarasseryChuram</div>
                            </div>
                            </div>

                </div>


                
            </div>
            




        </div>
    );
}

export default Programs;