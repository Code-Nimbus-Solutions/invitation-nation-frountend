import { Sidebar } from "./sidebar";

import BasicTabs from "./MUI components/Tabs";

export function Wishes(){
    return(
        <>
        <div className="templatemain" >
            <div className="tempcont">
                <Sidebar />
                <div className="mainttemptxt">
                    <p className="andretemp">Hi Andrei,</p>
    
              
                <h1 className="temp" style={{justifyContent:"center",width:"600px"}}>Welcome To invitation Nation</h1>
                <BasicTabs/>
               
               
            </div>
                   </div>
                  
                  
            </div></>
       
    )
}