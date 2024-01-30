import CustomizedProgressBars from "./progress";


export function Websetup(){
    return(
        <div className="maincard">
            <h1 className="crdhd">WebSite Setup</h1>
            <p className="percent">80% completed</p>
            <CustomizedProgressBars/>
            <button className="custom">Customize Now</button>
            
        </div>
    )
}