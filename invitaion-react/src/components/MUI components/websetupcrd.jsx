import { Link } from "react-router-dom";
import CustomizedProgressBars from "./progress";


export function Websetup(){
    return(
        <div className="maincard">
            <h1 className="crdhd">WebSite Setup</h1>
            <p className="percent">80% completed</p>
            <CustomizedProgressBars className='pro'/>
            <div className="custom1">
                <Link to='/setting' className="customm"><button className="custom" style={{cursor:"pointer"}}>Customize Now</button></Link>
            </div>
            
            
        </div>
    )
}