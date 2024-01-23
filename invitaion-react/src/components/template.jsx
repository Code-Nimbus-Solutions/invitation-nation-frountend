import { Fourcard } from "./Fourcardbttn";
import ImgMediaCard from "./MUI components/Card";
import { Sidebar } from "./sidebar";


export function Templetes(){
    
    return(  
    <>
    <div className="templatemain" >
        <div className="tempcont">
            
           
           <div className="mainttemptxt">
                
            <ImgMediaCard className="imgcard"/>
        </div>
               </div>
               <div className="fourcrd">
                 <Fourcard/>
               </div>
              
        </div></>
    )
}