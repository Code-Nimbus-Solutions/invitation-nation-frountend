import { Link } from "react-router-dom";
import CustomizedProgressBars from "./progress";


export function Websetup(){
    return(
        <div className="maincard">
            <h1 className="crdhd">WebSite Setup</h1>
            <p className="percent">80% completed</p>
            <CustomizedProgressBars/>
            <Link to='/setting'><button className="custom">Customize Now</button></Link>
            
        </div>
    )
}