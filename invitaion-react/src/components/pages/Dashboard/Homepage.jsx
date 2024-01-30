import BadgeAvatars from '../../MUI components/avatar';
import '../../../components/dash.css'
import  { Sidebar } from '../../MUI components/sidebar';



import { Websetup } from "../../MUI components/websetupcrd";

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