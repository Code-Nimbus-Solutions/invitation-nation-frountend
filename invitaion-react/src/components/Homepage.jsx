import BadgeAvatars from './avatar';
import './dash.css'
import  { Sidebar } from './sidebar';



import { Websetup } from "./websetupcrd";

export function Homepage(){
    return(
        <div className="mainhomepg">
          
            <p className="user">Hi , Andrie</p>
            <h1 className="heading">Welcome to our website!</h1>
            <div className="avtar">
                <BadgeAvatars className="Avatar"/>
            </div>
          <Sidebar/>
            <Websetup/>
           
        </div>
    )
}